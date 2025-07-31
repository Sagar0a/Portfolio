import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import JourneyTimeline from './components/JourneyTimeline';
import TechnicalPhilosophy from './components/TechnicalPhilosophy';
import SkillsOverview from './components/SkillsOverview';
import PersonalInsights from './components/PersonalInsights';

const AboutEcosystem = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Sagar</title>
        <meta 
          name="description" 
          content="Discover Sagar's journey from curiosity-driven learning to building production-ready applications. Learn about the technical philosophy, skills, and passion that drives this fresh frontend developer." 
        />
        <meta name="keywords" content="Sagar, frontend developer, React developer, JavaScript, web development, developer journey, technical skills, programming philosophy" />
        <meta property="og:title" content="About Sagar - Frontend Developer Journey" />
        <meta property="og:description" content="From curiosity to competence - explore the authentic developer journey of Sagar, a passionate frontend developer ready to make an impact." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Sagar - Frontend Developer Journey" />
        <meta name="twitter:description" content="Discover the story behind the code - Sagar's journey in frontend development." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Journey Timeline */}
          <JourneyTimeline />
          
          {/* Technical Philosophy */}
          <TechnicalPhilosophy />
          
          {/* Skills Overview */}
          <SkillsOverview />
          
          {/* Personal Insights */}
          <PersonalInsights />
        </main>

        {/* Footer */}
        <footer className="bg-muted/30 border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold text-gradient-primary">Sagar Portfolio</span>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Crafting digital experiences with passion and precision
              </p>
              
              <div className="flex justify-center space-x-6 mb-6">
                <a href="https://github.com/Sagar0a" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/sagaranand18/" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  LinkedIn
                </a>
                {/* <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Twitter
                </a> */}
                {/* <a href="mailto:sagaranand182005@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Email
                </a> */}
              </div>
              
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Sagar Portfolio. Built with React & Tailwind CSS.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutEcosystem;