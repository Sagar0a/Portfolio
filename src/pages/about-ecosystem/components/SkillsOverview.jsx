import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsOverview = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: "Monitor",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90, icon: "Atom", description: "Component-based architecture, hooks, context" },
        { name: "JavaScript", level: 85, icon: "Code", description: "ES6+, async/await, DOM manipulation" },
        { name: "HTML/CSS", level: 95, icon: "Layout", description: "Semantic HTML, CSS Grid, Flexbox" },
        { name: "Tailwind CSS", level: 88, icon: "Palette", description: "Utility-first styling, responsive design" },
        { name: "TypeScript", level: 75, icon: "FileCode", description: "Type safety, interfaces, generics" },
        { name: "Next.js", level: 80, icon: "Globe", description: "SSR, routing, API routes" }
      ]
    },
    tools: {
      title: "Tools & Workflow",
      icon: "Wrench",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Git", level: 85, icon: "GitBranch", description: "Version control, branching, collaboration" },
        { name: "VS Code", level: 95, icon: "Code2", description: "Extensions, debugging, productivity" },
        { name: "Webpack", level: 70, icon: "Package", description: "Module bundling, optimization" },
        { name: "npm/yarn", level: 90, icon: "Download", description: "Package management, scripts" },
        { name: "Chrome DevTools", level: 88, icon: "Bug", description: "Debugging, performance analysis" },
        { name: "Figma", level: 75, icon: "Figma", description: "Design collaboration, prototyping" }
      ]
    },
    backend: {
      title: "Backend & Database",
      icon: "Database",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Node.js", level: 75, icon: "Server", description: "Runtime environment, npm ecosystem" },
        { name: "Express.js", level: 70, icon: "Zap", description: "Web framework, middleware, routing" },
        { name: "MongoDB", level: 65, icon: "Database", description: "NoSQL database, aggregation" },
        { name: "REST APIs", level: 80, icon: "Link", description: "API design, HTTP methods, status codes" },
        { name: "Firebase", level: 70, icon: "Cloud", description: "Authentication, Firestore, hosting" },
        { name: "SQL", level: 60, icon: "Table", description: "Queries, joins, database design" }
      ]
    },
    soft: {
      title: "Soft Skills",
      icon: "Heart",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Problem Solving", level: 90, icon: "Lightbulb", description: "Analytical thinking, debugging" },
        { name: "Communication", level: 85, icon: "MessageCircle", description: "Technical writing, presentations" },
        { name: "Team Collaboration", level: 88, icon: "Users", description: "Code reviews, pair programming" },
        { name: "Time Management", level: 82, icon: "Clock", description: "Project planning, deadline management" },
        { name: "Adaptability", level: 95, icon: "Shuffle", description: "Learning new technologies quickly" },
        { name: "Attention to Detail", level: 92, icon: "Eye", description: "Code quality, UI/UX precision" }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Skills</span>
            <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Technical
            <span className="text-gradient-primary"> Expertise</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and competencies. 
            Each skill represents hours of practice, projects built, and problems solved.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const categoryData = skillCategories[category];
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 focus-ring ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-background text-foreground hover:bg-muted border border-border'
                }`}
              >
                <Icon name={categoryData.icon} size={18} />
                <span>{categoryData.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="card-elevated p-6 hover:shadow-lg transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Skill Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-lg flex items-center justify-center`}>
                  <Icon name={skill.icon} size={18} color="white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                  <p className="text-xs text-muted-foreground">{skill.description}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Proficiency</span>
                  <span className="text-sm font-medium text-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`h-2 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Skill Level Badge */}
              <div className="flex justify-end">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  skill.level >= 90 ? 'bg-green-100 text-green-800' :
                  skill.level >= 80 ? 'bg-blue-100 text-blue-800' :
                  skill.level >= 70 ? 'bg-yellow-100 text-yellow-800': 'bg-gray-100 text-gray-800'
                }`}>
                  {skill.level >= 90 ? 'Expert' :
                   skill.level >= 80 ? 'Advanced' :
                   skill.level >= 70 ? 'Intermediate': 'Learning'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Goals */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['GraphQL', 'Docker', 'AWS', 'Testing (Jest)', 'Vue.js'].map((tech) => (
              <div
                key={tech}
                className="flex items-center space-x-2 px-4 py-2 bg-background border border-border rounded-lg hover:shadow-md transition-all duration-200"
              >
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsOverview;