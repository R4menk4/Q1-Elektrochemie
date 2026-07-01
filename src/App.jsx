import { useState } from 'react';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import RedoxOverviewPage from './pages/RedoxOverviewPage.jsx';
import RedoxExplanationPage from './pages/RedoxExplanationPage.jsx';
import RedoxEasyPracticePage from './pages/RedoxEasyPracticePage.jsx';
import RedoxMediumPracticePage from './pages/RedoxMediumPracticePage.jsx';
import RedoxHardPracticePage from './pages/RedoxHardPracticePage.jsx';
import SelfCheckPage from './pages/SelfCheckPage.jsx';
import KlausurTasksOverviewPage from './pages/KlausurTasksOverviewPage.jsx';
import KlausurTaskDetailPage from './pages/KlausurTaskDetailPage.jsx';
import ElectrodePotentialModule from './components/ElectrodePotentialModule.jsx';

const views = {
  home: HomePage,
  selfCheck: SelfCheckPage,
  redoxOverview: RedoxOverviewPage,
  redoxExplanation: RedoxExplanationPage,
  redoxPractice: RedoxEasyPracticePage,
  redoxMediumPractice: RedoxMediumPracticePage,
  redoxHardPractice: RedoxHardPracticePage,
  electrodePotentials: ElectrodePotentialModule,
  klausurOverview: KlausurTasksOverviewPage,
  klausurTaskDetail: KlausurTaskDetailPage,
};

export default function App() {
  const [view, setView] = useState('home');
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const CurrentPage = views[view] ?? HomePage;

  function navigate(nextView, payload = {}) {
    if (payload.taskId) {
      setSelectedTaskId(payload.taskId);
    }
    setView(nextView);
  }

  return (
    <Layout>
      {view === 'electrodePotentials' ? (
        <ElectrodePotentialModule onBackToHome={() => setView('home')} />
      ) : (
        <CurrentPage navigate={navigate} selectedTaskId={selectedTaskId} />
      )}
    </Layout>
  );
}
