import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const JourneyTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      id: 1,
      year: "2024",
      title: "The Spark",
      subtitle: "First Line of Code",
      description: `My journey began with curiosity about how websites work. Started with HTML and CSS, creating my first static webpage. The moment I saw my code come to life in the browser was magical - I knew I had found my passion.`,
      icon: "Zap",
      technologies: ["HTML", "CSS"],
      achievement: "Built first personal webpage",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      year: "2024",
      title: "JavaScript Awakening",
      subtitle: "Adding Interactivity",
      description: `Dove deep into JavaScript fundamentals. Learned about DOM manipulation, event handling, and asynchronous programming. Built interactive projects like calculators and to-do apps that taught me the power of dynamic web development.`,
      icon: "Lightbulb",
      technologies: ["JavaScript", "DOM", "APIs"],
      achievement: "Created 5+ interactive web apps",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 3,
      year: "2025",
      title: "React Revolution",
      subtitle: "Component-Based Thinking",
      description: `Embraced React and modern frontend development. Learned about components, state management, and hooks. This was a game-changer - suddenly complex UIs became manageable and reusable. Built my first SPA and never looked back.`,
      icon: "Atom",
      technologies: ["React", "JSX", "Hooks", "State Management"],
      achievement: "Mastered component architecture",
      color: "from-blue-600 to-purple-600"
    },
    {
      id: 4,
      year: "2025",
      title: "Full-Stack Exploration",
      subtitle: "Beyond the Frontend",
      description: `Expanded into backend technologies to understand the full picture. Learned Node.js, Express, and database management. This knowledge made me a more well-rounded developer who can communicate effectively with backend teams.`,
      icon: "Database",
      technologies: ["Node.js", "Express", "MongoDB", "REST APIs"],
      achievement: "Built full-stack applications",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 5,
      year: "2025",
      title: "Modern Tooling",
      subtitle: "Professional Workflow",
      description: `Adopted modern development tools and practices. Learned Git, webpack, testing frameworks, and CI/CD. Started contributing to open source projects and collaborating with other developers. Ready for professional development.`,
      icon: "Wrench",
      technologies: ["Git", "Webpack", "Testing", "CI/CD"],
      achievement: "Professional-grade workflow",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 6,
      year: "2025",
      title: "Present Day",
      subtitle: "Ready to Contribute",
      description: `Currently focused on advanced React patterns, performance optimization, and accessibility. Building portfolio projects that showcase real-world problem-solving skills. Excited to bring fresh perspective to a development team.`,
      icon: "Rocket",
      technologies: ["Advanced React", "Performance", "Accessibility"],
      achievement: "Portfolio-ready developer",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">My Journey</span>
            <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            From Curiosity to
            <span className="text-gradient-primary"> Competence</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every great developer has a story. Here's mine - a journey of continuous learning, 
            building, and growing in the world of frontend development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

          {/* Timeline Steps */}
          <div className="space-y-12 lg:space-y-16">
            {journeySteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 bg-background border-4 border-primary rounded-full flex items-center justify-center z-10">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.color} ${
                    activeStep === index ? 'animate-pulse' : ''
                  }`}></div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 lg:ml-0 lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                }`}>
                  <div className={`card-elevated p-6 lg:p-8 transition-all duration-300 hover:shadow-lg ${
                    activeStep === index ? 'ring-2 ring-primary/20 shadow-lg' : ''
                  }`}>
                    {/* Year Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                      {step.year}
                    </div>

                    {/* Icon and Title */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon name={step.icon} size={20} color="white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">Technologies Learned:</h4>
                      <div className="flex flex-wrap gap-2">
                        {step.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievement */}
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="Trophy" size={16} className="text-accent" />
                      <span className="text-accent font-medium">{step.achievement}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        
      </div>
    </section>
  );
};

export default JourneyTimeline;