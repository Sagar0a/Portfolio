import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero-landing-zone');

  const sections = [
    { id: 'hero-landing-zone', name: 'Hero', icon: 'Home' },
    { id: 'about-ecosystem', name: 'About', icon: 'User' },
    { id: 'project-gallery', name: 'Projects', icon: 'FolderOpen' },
    { id: 'skills-laboratory', name: 'Skills', icon: 'Code' },
    { id: 'contact-portal', name: 'Contact', icon: 'Mail' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Mock section detection based on scroll position
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition < windowHeight * 0.2) {
        setCurrentSection('hero-landing-zone');
      } else if (scrollPosition < windowHeight * 1.2) {
        setCurrentSection('about-ecosystem');
      } else if (scrollPosition < windowHeight * 2.2) {
        setCurrentSection('project-gallery');
      } else if (scrollPosition < windowHeight * 3.2) {
        setCurrentSection('skills-laboratory');
      } else {
        setCurrentSection('contact-portal');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-3">
          <Icon name="Navigation" size={20} color="white" strokeWidth={2} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Portfolio Progress</h3>
          <p className="text-sm text-muted-foreground">Your journey through my work</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Scroll Progress</span>
          <span className="text-sm text-muted-foreground">{Math.round(scrollProgress)}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* Section Indicators */}
      <div className="space-y-3">
        {sections.map((section, index) => (
          <div 
            key={section.id}
            className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
              currentSection === section.id
                ? 'bg-primary/10 border border-primary/20' :'hover:bg-muted'
            }`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-colors duration-200 ${
              currentSection === section.id
                ? 'bg-primary text-white' :'bg-muted text-muted-foreground'
            }`}>
              <Icon name={section.icon} size={16} strokeWidth={2} />
            </div>
            
            <div className="flex-1">
              <span className={`text-sm font-medium transition-colors duration-200 ${
                currentSection === section.id ? 'text-primary' : 'text-foreground'
              }`}>
                {section.name}
              </span>
            </div>
            
            {currentSection === section.id && (
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Stats */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-primary">5</div>
            <div className="text-xs text-muted-foreground">Sections</div>
          </div>
          <div>
            <div className="text-lg font-bold text-accent">100%</div>
            <div className="text-xs text-muted-foreground">Complete</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;