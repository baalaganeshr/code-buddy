import LandingNav from './components/LandingNav';
import HeroSection from './components/HeroSection';
import FeatureHighlights from './components/FeatureHighlights';
import WorkflowSection from './components/WorkflowSection';
import PreviewShowcase from './components/PreviewShowcase';
import CallToAction from './components/CallToAction';
import LandingFooter from './components/LandingFooter';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <LandingNav />
      <HeroSection />
      <FeatureHighlights />
      <WorkflowSection />
      <PreviewShowcase />
      <CallToAction />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
