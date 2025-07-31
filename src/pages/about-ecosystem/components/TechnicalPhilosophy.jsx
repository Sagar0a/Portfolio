import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalPhilosophy = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const philosophies = [
    {
      id: 1,
      title: "User-Centered Development",
      subtitle: "Code with Purpose",
      description: `Every line of code I write serves a purpose - to create better user experiences. I believe that technical excellence means nothing if it doesn't solve real problems for real people. My approach starts with understanding user needs and translating them into elegant, functional solutions.`,
      icon: "Users",
      principles: [
        "Accessibility-first design thinking",
        "Performance optimization for all devices",
        "Intuitive interface patterns",
        "Mobile-responsive by default"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Clean Code Advocate",
      subtitle: "Maintainable & Scalable",
      description: `I'm passionate about writing code that tells a story. Clean, readable code isn't just about following conventions - it's about creating a foundation that teams can build upon. Every function, variable, and component should have a clear purpose and be easy to understand.`,
      icon: "Code",
      principles: [
        "Semantic naming conventions",
        "Single responsibility principle",
        "Comprehensive documentation",
        "Test-driven development approach"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      title: "Continuous Learning",
      subtitle: "Growth Mindset",
      description: `The frontend landscape evolves rapidly, and I embrace this constant change. I'm committed to staying current with best practices, new technologies, and emerging patterns. Learning isn't just about keeping up - it's about finding better ways to solve problems.`,
      icon: "BookOpen",
      principles: [
        "Daily learning and practice",
        "Open source contributions",
        "Community engagement",
        "Experimentation with new tools"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Collaborative Spirit",
      subtitle: "Team-First Approach",
      description: `Great software is built by great teams. I believe in the power of collaboration, code reviews, and knowledge sharing. My goal is not just to write good code, but to help elevate the entire team's capabilities through mentorship and open communication.`,
      icon: "Users2",
      principles: [
        "Constructive code reviews",
        "Knowledge sharing sessions",
        "Pair programming enthusiasm",
        "Cross-functional collaboration"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Philosophy</span>
            <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            My Development
            <span className="text-gradient-primary"> Philosophy</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These core principles guide every project I work on and every line of code I write. 
            They represent not just how I develop, but how I think about technology's role in solving human problems.
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {philosophies.map((philosophy, index) => (
            <div
              key={philosophy.id}
              className={`card-elevated p-8 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                activePhilosophy === index ? 'ring-2 ring-primary/20 shadow-lg' : ''
              }`}
              onClick={() => setActivePhilosophy(index)}
              onMouseEnter={() => setActivePhilosophy(index)}
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${philosophy.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon name={philosophy.icon} size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{philosophy.title}</h3>
                  <p className="text-sm text-muted-foreground">{philosophy.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {philosophy.description}
              </p>

              {/* Principles */}
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Key Principles:</h4>
                <ul className="space-y-2">
                  {philosophy.principles.map((principle, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${philosophy.color} rounded-full flex-shrink-0`}></div>
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Icon name="Quote" size={48} className="text-primary/20 mx-auto mb-6" />
              <blockquote className="text-2xl lg:text-3xl font-medium text-foreground mb-6 leading-relaxed">
                "Good code is not just about making computers understand what you want to do. 
                It's about making humans understand what you wanted the computer to do."
              </blockquote>
              <cite className="text-muted-foreground">— My approach to development</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalPhilosophy;