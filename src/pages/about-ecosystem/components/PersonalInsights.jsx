import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { Link } from 'react-router-dom';
import Button from 'components/ui/Button';

const PersonalInsights = () => {
  const [activeInsight, setActiveInsight] = useState(0);

  const insights = [
    {
      id: 1,
      title: "Why Frontend Development?",
      content: `Frontend development chose me as much as I chose it. There's something magical about transforming ideas into interactive experiences that users can touch, feel, and navigate. I love the immediate feedback loop - write code, see results, iterate, improve. It's the perfect blend of creativity and logic, where artistic vision meets technical precision.`,
      icon: "Heart",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 2,
      title: "My Learning Approach",
      content: `I believe in learning by building. Every concept I study gets immediately applied in a project, no matter how small. I maintain a 'beginner's mind' - always curious, always questioning. When I encounter a problem I can't solve, I break it down into smaller pieces until each piece becomes manageable. Documentation is my best friend, and Stack Overflow is my second home.`,
      icon: "BookOpen",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Problem-Solving Philosophy",
      content: `Every bug is a puzzle waiting to be solved, every feature is a story waiting to be told. I approach problems methodically: understand the requirement, break it down, research solutions, implement incrementally, and test thoroughly. I'm not afraid to ask questions or admit when I don't know something - that's how we grow.`,
      icon: "Puzzle",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "What Drives Me",
      content: `I'm driven by the impact of good software on people's lives. Whether it's making a website more accessible, improving load times, or creating an intuitive user interface, I know that my code can make someone's day a little better. That responsibility excites and motivates me to write better code every day.`,
      icon: "Target",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const personalFacts = [
    { icon: "Coffee", text: "Powered by coffee and curiosity" },
    { icon: "Music", text: "Code better with lo-fi hip hop" },
    { icon: "Moon", text: "Night owl developer" },
    { icon: "Gamepad2", text: "Gaming for creative inspiration" },
    { icon: "Camera", text: "Photography enthusiast" },
    { icon: "Bike", text: "Cycling for mental clarity" }
  ];

  const currentFocus = [
    { area: "Advanced React Patterns", progress: 75, icon: "Atom" },
    { area: "Web Performance", progress: 60, icon: "Zap" },
    { area: "Accessibility (a11y)", progress: 80, icon: "Eye" },
    { area: "Testing Strategies", progress: 45, icon: "CheckCircle" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Personal</span>
            <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Beyond the
            <span className="text-gradient-primary"> Code</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get to know the person behind the developer. My motivations, learning style, 
            and what makes me tick as both a coder and a human being.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Personal Insights */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Personal Insights</h3>
            
            <div className="space-y-6">
              {insights.map((insight, index) => (
                <div
                  key={insight.id}
                  className={`card-elevated p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    activeInsight === index ? 'ring-2 ring-primary/20 shadow-lg' : ''
                  }`}
                  onClick={() => setActiveInsight(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${insight.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon name={insight.icon} size={20} color="white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-3">{insight.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{insight.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Facts & Current Focus */}
          <div className="space-y-12">
            {/* Fun Facts */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Fun Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                {personalFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200"
                  >
                    <Icon name={fact.icon} size={20} className="text-primary" />
                    <span className="text-sm text-foreground">{fact.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Current Focus Areas</h3>
              <div className="space-y-6">
                {currentFocus.map((focus, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon name={focus.icon} size={18} className="text-primary" />
                        <span className="font-medium text-foreground">{focus.area}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{focus.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="h-2 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${focus.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Core Values</h3>
              <div className="space-y-4">
                {[
                  { value: "Continuous Learning", description: "Always growing, always improving" },
                  { value: "User Empathy", description: "Building for people, not just systems" },
                  { value: "Code Quality", description: "Clean, maintainable, and documented" },
                  { value: "Collaboration", description: "Better together than alone" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.value}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Let's Build Something Amazing</h3>
            <p className="text-muted-foreground mb-8">
              I'm excited to bring my passion, skills, and fresh perspective to your team. 
              Ready to create exceptional user experiences together?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              



              <Link to="/Contact-Portal">
             <Button className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-white hover:text-primary transition-colors duration-400 focus-ring">
               <Icon name="Mail" size={18} className="mr-2"></Icon>
               Get in Touch
            </Button>
              </Link>

              <Link to="">
            <Button className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-400 focus-ring">                <Icon name="Eye" size={18} className="mr-2"></Icon>
                View My Work
              </Button>
              </Link>


          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInsights;