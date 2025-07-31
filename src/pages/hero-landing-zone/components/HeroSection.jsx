import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Sagar from "../assets/my-image.jpg"
const HeroSection = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Fresh Perspective Meets Solid Fundamentals";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypewriterText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const floatingTechnologies = [
  { name: 'React', icon: 'Code', color: '#61DAFB', delay: 0 },
  { name: 'Next.js', icon: 'Zap', color: '#000000', delay: 0.2 },
  { name: 'Tailwind', icon: 'Palette', color: '#06B6D4', delay: 0.4 },
  { name: 'JavaScript', icon: 'FileCode', color: '#F7DF1E', delay: 0.6 },
  { name: 'TypeScript', icon: 'Code2', color: '#3178C6', delay: 0.8 }];


  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl font-mono text-primary animate-float-code">
          {'{ }'}
        </div>
        <div className="absolute top-40 right-20 text-4xl font-mono text-accent animate-float-code animation-delay-200">
          {'</>'}
        </div>
        <div className="absolute bottom-40 left-20 text-5xl font-mono text-secondary animate-float-code animation-delay-400">
          {'()'}
        </div>
        <div className="absolute bottom-20 right-10 text-3xl font-mono text-primary animate-float-code animation-delay-600">
          {'=>'}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>

            {/* Greeting */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}>

              <p className="text-accent font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                Sagar
                <span className="text-gradient-primary ml-2">Anand</span>
              </h1>
              <p className="text-xl text-muted-foreground">Frontend Developer</p>
            </motion.div>

            {/* Typewriter Headline */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}>

              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground min-h-[4rem] flex items-center">
                {typewriterText}
                <span className="animate-pulse ml-1 text-accent">|</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Crafting digital experiences that matter through clean code, modern design, and a passion for continuous learning. Ready to bring fresh energy to your development team.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}>

              <Link to="/project-gallery">
                <Button
                  variant="default"
                  size="lg"
                  iconName="FolderOpen"
                  iconPosition="right"
                  className="bg-primary hover:bg-primary/90 interactive-hover">

                  Explore My Work
                </Button>
              </Link>
              <Link to="/contact-portal">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Mail"
                  iconPosition="right"
                  className="interactive-hover">

                  Let's Connect
                </Button>
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="flex flex-wrap gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}>

              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground">Dedication</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>

            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src={Sagar}
                  alt="Sagarr - Frontend Developer"
                  className="w-full h-full rounded-full border-4 border-blue-500 object-cover transform hover:scale-105 transition-transform duration-500" />

              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Icon name="Code" size={32} color="white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Icon name="Zap" size={24} color="white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Technology Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingTechnologies.map((tech, index) =>
          <motion.div
            key={tech.name}
            className="absolute"
            style={{
              top: `${20 + index * 15}%`,
              left: `${10 + index * 20}%`
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.7,
              scale: 1,
              y: [0, -20, 0]
            }}
            transition={{
              delay: tech.delay,
              duration: 0.6,
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}>

              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-border">
                <Icon name={tech.icon} size={24} className="text-primary" />
                <span className="text-xs font-medium text-foreground mt-1 block">{tech.name}</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}>

          <div className="flex flex-col items-center space-y-2 cursor-pointer group">
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-primary rounded-full mt-2" />

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;