import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const QuickPreview = () => {
  const previewSections = [
    {
      title: "About Me",
      description: "Discover my journey from curiosity to code, and the passion that drives my development career.",
      icon: "User",
      link: "/about-ecosystem",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop"
    },
    {
      title: "Projects",
      description: "Explore interactive showcases of my work, from concept to deployment with live demos.",
      icon: "FolderOpen",
      link: "/project-gallery",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop"
    },
    {
      title: "Skills",
      description: "Dive into my technical toolkit and see how I bring ideas to life through code.",
      icon: "Code",
      link: "/skills-laboratory",
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop"
    },
    {
      title: "Contact",
      description: "Ready to collaborate? Let\'s connect and build something amazing together.",
      icon: "Mail",
      link: "/contact-portal",
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&h=300&fit=crop"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Explore My <span className="text-gradient-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a quick tour through different sections of my portfolio to discover my journey, work, and expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {previewSections.map((section, index) => (
            <motion.div
              key={section.title}
              variants={cardVariants}
              className="group"
            >
              <Link to={section.link} className="block">
                <div className="card-elevated overflow-hidden interactive-hover group-hover:shadow-xl transition-all duration-300">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon name={section.icon} size={32} color="white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {section.description}
                    </p>
                    
                    <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span>Explore</span>
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          {/* <div className="card-elevated p-8 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start a Conversation?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Whether you're looking for a dedicated frontend developer or want to discuss a project idea, I'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-portal">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90"
                >
                  Get In Touch
                </Button>
              </Link>
              <Link to="/project-gallery">
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="Eye"
                  iconPosition="left"
                >
                  View My Work
                </Button>
              </Link>
            </div>
          </div> */}
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">Connect with me on</p>
          <div className="flex justify-center space-x-6">
            {[
              { name: 'GitHub', icon: 'Github', url: 'https://github.com/Sagar0a' },
              { name: 'LinkedIn', icon: 'Linkedin', url: 'https://www.linkedin.com/in/sagaranand18/' },
              { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com' },
              // { name: 'Email', icon: 'Phone', url: 'mailto:sagaranand182005@gmail.com'

              
              
                
               
               
              
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 interactive-hover"
                aria-label={social.name}
              >
                <Icon name={social.icon} size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickPreview;