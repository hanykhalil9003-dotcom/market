import Contact from '@/components/Contact';
import Courses from '@/components/Courses';
import FloatingContactActions from '@/components/FloatingContactActions';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import KeywordTicker from '@/components/KeywordTicker';
import KuwaitAreas from '@/components/KuwaitAreas';
import Location from '@/components/Location';
import Metrics from '@/components/Metrics';
import PainPoints from '@/components/PainPoints';
import Services from '@/components/Services';
import Trades from '@/components/Trades';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030712] text-slate-100 selection:bg-cyan-300/30 selection:text-white">
      <KeywordTicker />
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <Trades />
        <Courses />
        <Metrics />
        <KuwaitAreas />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingContactActions />
    </div>
  );
}
