import CoreAgenticAI from './components/CoreAgenticAI';
import EngagementModels from './components/EngagementModels';
import HeroSection from './components/HeroSection';
import NetworkOutro from './components/NetworkOutro';
import SecondaryServices from './components/SecondaryServices';
import Stabilization from './components/Stabilization';
import SystemPanels from './components/SystemPanels';
import { useCinematicScrollAnimations } from './hooks/useCinematicScrollAnimations';
import { useScrollProgress } from './hooks/useScrollProgress';

function App() {
  const { progress } = useScrollProgress();

  useCinematicScrollAnimations();

  return (
    <div className="cinematic">
      <HeroSection scrollProgress={progress} />
      <CoreAgenticAI />
      <SystemPanels />
      <SecondaryServices />
      <EngagementModels />
      <NetworkOutro />
      <Stabilization />

      <footer className="footer">
        <p>Telemetry is continuous. Intervention is explicit.</p>
      </footer>
    </div>
  );
}

export default App;
