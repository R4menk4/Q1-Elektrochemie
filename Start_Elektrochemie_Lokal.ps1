$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Prefix = "http://127.0.0.1:8080/"

$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add($Prefix)

try {
  $listener.Start()
} catch {
  Start-Process "$($Prefix)index.html"
  exit
}

Start-Process "$($Prefix)index.html"
Write-Host "Elektrochemie Lernprogramm laeuft unter $($Prefix)index.html"
Write-Host "Dieses Fenster offen lassen. Mit Strg+C beenden."

$mimeTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".js" = "text/javascript; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".png" = "image/png"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".svg" = "image/svg+xml"
}

while ($listener.IsListening) {
  $context = $listener.GetContext()
  $requestPath = [Uri]::UnescapeDataString($context.Request.Url.AbsolutePath)
  if ($requestPath -eq "/") {
    $requestPath = "/index.html"
  }

  $relative = $requestPath.TrimStart("/") -replace "/", [System.IO.Path]::DirectorySeparatorChar
  $filePath = [System.IO.Path]::GetFullPath((Join-Path $Root $relative))
  $rootPath = [System.IO.Path]::GetFullPath($Root)

  if (-not $filePath.StartsWith($rootPath) -or -not (Test-Path -LiteralPath $filePath -PathType Leaf)) {
    $context.Response.StatusCode = 404
    $bytes = [Text.Encoding]::UTF8.GetBytes("Datei nicht gefunden")
    $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    $context.Response.Close()
    continue
  }

  $extension = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
  $context.Response.ContentType = if ($mimeTypes.ContainsKey($extension)) { $mimeTypes[$extension] } else { "application/octet-stream" }
  $bytes = [System.IO.File]::ReadAllBytes($filePath)
  $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  $context.Response.Close()
}
