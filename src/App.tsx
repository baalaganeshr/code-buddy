import LandingPage from '@/features/landing/LandingPage';
import BuilderShowcase from '@/features/builder/BuilderShowcase';

const App = () => {
  return (
    <div className="bg-background text-text-primary min-h-screen">
      <LandingPage />
      <BuilderShowcase />
    </div>
  );
};

export default App;
