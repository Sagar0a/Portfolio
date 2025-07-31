import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TechShowcase from './components/TechShowcase';
import QuickPreview from './components/QuickPreview';

const HeroLandingZone = () => {
  return (
    <>
      <Helmet>
        <title>Sagar  - Frontend Developer | Fresh Perspective Meets Solid Fundamentals</title>
        <meta name="description" content="Welcome to Sagar 's portfolio - a passionate frontend developer crafting digital experiences with React, Next.js, and modern web technologies. Explore my journey, projects, and skills." />
        <meta name="keywords" content="frontend developer, React developer, Next.js, JavaScript, web development, portfolio, Sagar " />
        <meta property="og:title" content="Sagar  - Frontend Developer Portfolio" />
        <meta property="og:description" content="Fresh Perspective Meets Solid Fundamentals - Explore my journey as a frontend developer" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sagar - Frontend Developer" />
        <meta name="twitter:description" content="Crafting digital experiences that matter through clean code and modern design" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <TechShowcase />
          <QuickPreview />
        </main>

        {/* Footer */}
        <footer className="bg-muted/30 border-t border-border py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Sagar. Crafted with passion and modern web technologies.
              </p>
              <p className="text-muted-foreground text-xs mt-2">
                Built with React, Tailwind CSS, and lots of ☕
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HeroLandingZone;