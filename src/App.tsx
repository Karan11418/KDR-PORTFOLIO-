import React, { useState, useEffect } from 'react';
import { LenisProvider } from './components/common/LenisScroll.tsx';
import { Navbar } from './components/navigation/Navbar.tsx';
import { IntroExperience } from './sections/Intro/IntroExperience.tsx';
import { HeroSection } from './sections/Hero/HeroSection.tsx';
import { AboutSection } from './sections/About/AboutSection.tsx';
import { ExpertiseSection } from './sections/Expertise/ExpertiseSection.tsx';
import { SkillsSection } from './sections/Skills/SkillsSection.tsx';
import { ProjectsSection } from './sections/Projects/ProjectsSection.tsx';
import { JourneySection } from './sections/Journey/JourneySection.tsx';
import { ContactSection } from './sections/Contact/ContactSection.tsx';
import { FooterSection } from './sections/Footer/FooterSection.tsx';
import { ResumeModal } from './components/ui/ResumeModal.tsx';

export default function App() {
  const [introActive, setIntroActive] = useState<boolean>(true);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check if intro was already experienced in this session
    try {
      const seen = sessionStorage.getItem('kdr_intro_seen');
      if (seen === 'true') {
        setIntroActive(false);
      }
    } catch {
      // Ignore sessionStorage errors
    }
  }, []);

  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIntroActive(true);
  };

  return (
    <LenisProvider>
      <div className="relative min-h-screen bg-[#050505] text-[#F3F4F6] selection:bg-[#0284c7] selection:text-white antialiased overflow-x-hidden">
        {/* Cinematic Animated Intro Experience */}
        {introActive && (
          <IntroExperience
            onComplete={() => setIntroActive(false)}
            forceShow={introActive}
          />
        )}

        {/* Minimal High-End Top Navigation */}
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        {/* Main Content Landmarks */}
        <main id="main-content" tabIndex={-1} className="outline-none">
          {/* Hero Section */}
          <HeroSection onOpenResume={() => setResumeOpen(true)} />

          {/* About Section */}
          <AboutSection />

          {/* Expertise / Capabilities Section */}
          <ExpertiseSection />

          {/* Skills & Technologies Section */}
          <SkillsSection />

          {/* Projects Portfolio Section */}
          <ProjectsSection />

          {/* Journey & Timeline Section */}
          <JourneySection />

          {/* Contact Section (with live Express backend) */}
          <ContactSection />
        </main>

        {/* Footer */}
        <FooterSection onReplayIntro={handleReplayIntro} />

        {/* Interactive Resume Modal Viewer */}
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      </div>
    </LenisProvider>
  );
}
