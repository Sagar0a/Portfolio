import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechShowcase = () => {
  const technologies = [
  {
    category: "Frontend Frameworks",
    items: [
    { name: "React", icon: "Code", proficiency: 90, color: "text-blue-500" },
    { name: "Next.js", icon: "Zap", proficiency: 85, color: "text-gray-800" },
    { name: "Vue.js", icon: "Layers", proficiency: 75, color: "text-green-500" }]

  },
  {
    category: "Styling & Design",
    items: [
    { name: "Tailwind CSS", icon: "Palette", proficiency: 95, color: "text-cyan-500" },
    { name: "CSS3", icon: "Paintbrush", proficiency: 88, color: "text-blue-600" },
    { name: "Sass", icon: "Brush", proficiency: 80, color: "text-pink-500" }]

  },
  {
    category: "Languages",
    items: [
    { name: "JavaScript", icon: "FileCode", proficiency: 92, color: "text-yellow-500" },
    { name: "TypeScript", icon: "Code2", proficiency: 78, color: "text-blue-700" },
    { name: "HTML5", icon: "Globe", proficiency: 95, color: "text-orange-500" }]

  }];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Technology <span className="text-gradient-primary">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building modern web experiences with cutting-edge technologies and best practices
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {technologies.map((category, categoryIndex) =>
          <motion.div
            key={category.category}
            variants={itemVariants}
            className="card-elevated p-6 hover:shadow-lg transition-shadow duration-300">

              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.items.map((tech, techIndex) =>
              <div key={tech.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-muted ${tech.color}`}>
                          <Icon name={tech.icon} size={20} />
                        </div>
                        <span className="font-medium text-foreground">{tech.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono">
                        {tech.proficiency}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: categoryIndex * 0.2 + techIndex * 0.1,
                      ease: "easeOut"
                    }} />

                    </div>
                  </div>
              )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

};

export default TechShowcase;