export default function Formula({ children, block = false }) {
  const Tag = block ? 'div' : 'span';
  return <Tag className={block ? 'formula formula--block' : 'formula'}>{children}</Tag>;
}
