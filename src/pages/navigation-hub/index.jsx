import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';
import NavigationCard from './components/NavigationCard';
import QuickActions from './components/QuickActions';
import ProgressIndicator from './components/ProgressIndicator';
import NavigationStats from './components/NavigationStats';
import KeyboardShortcuts from './components/KeyboardShortcuts';

const NavigationHub = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('hero-landing-zone');

  const navigationItems = [
    {
      name: 'Hero Landing Zone',
      path: '/hero-landing-zone',
      icon: 'Home',
      description: 'Immersive introduction with animated elements and personality showcase that creates immediate impact and establishes personal brand.'
    },
    {
      name: 'About Ecosystem',
      path: '/about-ecosystem',
      icon: 'User',
      description: 'Personal story, technical journey, and frontend philosophy that builds trust and connection through authentic storytelling.'
    },
    {
      name: 'Project Gallery',
      path: '/project-gallery',
      icon: 'FolderOpen',
      description: 'Interactive showcase with live demos, code snippets, and detailed case studies demonstrating technical capabilities.'
    },
    {
      name: 'Skills Laboratory',
      path: '/skills-laboratory',
      icon: 'Code',
      description: 'Visual representation of technical abilities with interactive elements that showcase competencies in an engaging way.'
    },
    {
      name: 'Contact Portal',
      path: '/contact-portal',
      icon: 'Mail',
      description: 'Multi-channel communication hub with real-time messaging to facilitate meaningful connections with potential employers.'
    }
  ];

  useEffect(() => {
    // Extract section from current path
    const currentPath = location.pathname.replace('/', '') || 'hero-landing-zone';
    setActiveSection(currentPath);
  }, [location]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float-code" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-code animation-delay-400" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-6 shadow-lg">
                <Icon name="Navigation" size={32} color="white" strokeWidth={2} />
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Navigation <span className="text-gradient-primary">Hub</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Your central command center for exploring Sagar's portfolio. Navigate seamlessly through all sections with intelligent progress tracking and contextual insights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <div className="flex items-center px-4 py-2 bg-card border border-border rounded-full">
                <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
                <span className="text-sm text-foreground font-medium">Live Navigation</span>
              </div>
              
              <div className="flex items-center px-4 py-2 bg-card border border-border rounded-full">
                <Icon name="Zap" size={16} className="text-primary mr-2" strokeWidth={2} />
                <span className="text-sm text-foreground font-medium">Quick Actions</span>
              </div>
              
              <div className="flex items-center px-4 py-2 bg-card border border-border rounded-full">
                <Icon name="BarChart3" size={16} className="text-accent mr-2" strokeWidth={2} />
                <span className="text-sm text-foreground font-medium">Analytics</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Portfolio Sections
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore each section of the portfolio with detailed insights and quick navigation access.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {navigationItems.map((item, index) => (
                <motion.div key={item.path} variants={itemVariants}>
                  <NavigationCard
                    item={item}
                    isActive={activeSection === item.path.replace('/', '')}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Dashboard Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Left Column */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
              <QuickActions />
              <KeyboardShortcuts />
            </motion.div>

            {/* Right Column */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              <ProgressIndicator />
              <NavigationStats />
            </motion.div>
          </motion.div>

          {/* Additional Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mr-4">
                    <Icon name="Sparkles" size={24} color="white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Enhanced Navigation Experience</h3>
                </div>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  This navigation hub demonstrates modern web development practices including smooth scrolling, 
                  progress tracking, keyboard shortcuts, and responsive design. Every interaction showcases 
                  attention to detail and user experience optimization.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name="MousePointer" size={20} className="text-primary" strokeWidth={2} />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Interactive Design</h4>
                    <p className="text-sm text-muted-foreground">Hover effects and micro-interactions</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name="Smartphone" size={20} className="text-accent" strokeWidth={2} />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Mobile Optimized</h4>
                    <p className="text-sm text-muted-foreground">Perfect experience on all devices</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name="Accessibility" size={20} className="text-primary" strokeWidth={2} />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Accessible</h4>
                    <p className="text-sm text-muted-foreground">Keyboard navigation and screen reader support</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NavigationHub;