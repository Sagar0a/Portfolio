import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Sagar from '../assets/my-image.jpg';



const HeroSection = () => {

  const handleResumeDownload = () => {
  // Mock resume download functionality
  const link = document.createElement('a');
  link.href = '/assets/SagarFd.pdf';
  link.download = 'Sagar_Frontend_Developer_Resume.pdf';
  link.click();
};
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float-code"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-code animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">About Me</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Crafting Digital
                <span className="text-gradient-primary block">Experiences</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                From curiosity-driven learning to building production-ready applications,
                my journey in frontend development is fueled by a passion for creating
                intuitive user experiences and writing clean, maintainable code.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">1.5+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-accent">6+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-secondary">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <map name="./public/assets"></map>
              <button onClick={handleResumeDownload}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 focus-ring">
                <Icon name="Download" size={18} className="mr-2" />
                Download Resume
              </button>
              
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square max-w-md mx-auto lg:max-w-none overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={Sagar}
                  alt="Sagar - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-xl backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-float-code">
                <Icon name="Code" size={24} color="var(--color-primary)" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-lg backdrop-blur-sm border border-accent/30 flex items-center justify-center animate-float-code animation-delay-200">
                <Icon name="Palette" size={20} color="var(--color-accent)" />
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;