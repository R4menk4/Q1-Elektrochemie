import { useState } from 'react';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import RedoxOverviewPage from './pages/RedoxOverviewPage.jsx';
import RedoxExplanationPage from './pages/RedoxExplanationPage.jsx';
import RedoxEasyPracticePage from './pages/RedoxEasyPracticePage.jsx';
import RedoxMediumPracticePage from './pages/RedoxMediumPracticePage.jsx';
import RedoxHardPracticePage from './pages/RedoxHardPracticePage.jsx';
import SelfCheckPage from './pages/SelfCheckPage.jsx';

const views = {
  home: HomePage,
  selfCheck: SelfCheckPage,
  redoxOverview: RedoxOverviewPage,
  redoxExplanation: RedoxExplanationPage,
  redoxPractice: RedoxEasyPracticePage,
  redoxMediumPractice: RedoxMediumPracticePage,
  redoxHardPractice: RedoxHardPracticePage,
};

export default function App() {
  const [view, setView] = useState('home');
  const CurrentPage = views[view] ?? HomePage;

  return (
    <Layout>
      <CurrentPage navigate={setView} />
    </Layout>
  );
}
