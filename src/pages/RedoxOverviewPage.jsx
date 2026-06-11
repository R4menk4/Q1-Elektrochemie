import BackButton from '../components/BackButton.jsx';
import Header from '../components/Header.jsx';
import TileCard from '../components/TileCard.jsx';
import TileGrid from '../components/TileGrid.jsx';

export default function RedoxOverviewPage({ navigate }) {
  return (
    <>
      <BackButton onClick={() => navigate('home')}>Zur Startseite</BackButton>
      <Header
        title="Redoxreaktionen aufstellen"
        subtitle="In diesem Modul lernst du, Redoxreaktionen aus reduzierten und oxidierten Formen aufzustellen. Du übst Oxidation, Reduktion, Elektronenanzahl und Gesamtreaktion."
      />

      <TileGrid>
        <TileCard
          title="Redoxreaktionen aufstellen – Erläuterung"
          description="Schritt für Schritt am Beispiel Zink und Kupfer-Ionen."
          onClick={() => navigate('redoxExplanation')}
        />
        <TileCard
          title="Redoxreaktionen aufstellen – einfach"
          description="Übe mit einfachen Metallatomen und Metallionen."
          onClick={() => navigate('redoxPractice')}
        />
        <TileCard
          title="Redoxreaktionen aufstellen – mittel"
          description="Übe mit Ionen, Nichtmetallen, Molekülen und Elektronenausgleich."
          onClick={() => navigate('redoxMediumPractice')}
        />
        <TileCard
          title="Redoxreaktionen aufstellen – schwer"
          description="Übe anspruchsvolle Redoxgleichungen in saurer Lösung."
          onClick={() => navigate('redoxHardPractice')}
        />
      </TileGrid>
    </>
  );
}
