import TopBar from './components/TopBar';
import BrandStrip from './components/BrandStrip';
import Hero from './components/Hero';
import FarmFooter from './components/FarmFooter';

function App() {
  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-900">
      <TopBar />
      <BrandStrip />
      <Hero />
      <FarmFooter />
    </div>
  );
}

export default App;
