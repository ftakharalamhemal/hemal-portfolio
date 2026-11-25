import ContactSection from './components/ContactSection';
import CredentialsSection from './components/CredentialsSection';
import ExperienceSection from './components/ExperienceSection';
import ExpertiseSection from './components/ExpertiseSection';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HighlightsSection from './components/HighlightsSection';
import ProjectsSection from './components/ProjectsSection';

export default function App() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ExpertiseSection />
        <ExperienceSection />
        <ProjectsSection />
        <HighlightsSection />
        <GallerySection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
