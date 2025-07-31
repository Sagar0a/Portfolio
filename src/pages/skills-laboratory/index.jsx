import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SkillCard from './components/SkillCard';
import SkillModal from './components/SkillModal';
import CategoryFilter from './components/CategoryFilter';
import CurrentlyLearning from './components/CurrentlyLearning';
import SkillStats from './components/SkillStats';
import SkillCombinations from './components/SkillCombinations';
import { Link } from 'react-router-dom';

const SkillsLaboratory = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredSkills, setFilteredSkills] = useState([]);

  // Mock data for skills
  const skillsData = [
    {
      id: 1,
      name: "React",
      category: "Frontend Frameworks",
      proficiency: "Advanced",
      percentage: 85,
      icon: "Code",
      bgColor: "bg-blue-500",
      description: "Building dynamic user interfaces with modern React patterns and hooks.",
      fullDescription: `React is my primary frontend framework where I've developed expertise in functional components, hooks, context API, and performance optimization. I've built multiple production applications using React 18 features including concurrent rendering and automatic batching.`,
      projectsUsed: 8,
      yearsExperience: 2,
      trending: true,
      timeline: [
        {
          period: "2023 - Present",
          milestone: "Advanced React Patterns",
          description: "Mastering custom hooks, compound components, and performance optimization techniques."
        },
        {
          period: "2022 - 2023",
          milestone: "React Fundamentals",
          description: "Built first React applications, learned component lifecycle and state management."
        }
      ],
      relatedProjects: [
        {
          name: "E-commerce Dashboard",
          description: "Admin panel with real-time data visualization",
          usage: "Primary Framework",
          impact: "40% faster development"
        },
        {
          name: "Task Management App",
          description: "Collaborative project management tool",
          usage: "Frontend Architecture",
          impact: "Improved user engagement"
        }
      ],
      keyFeatures: [
        "Functional Components",
        "Custom Hooks",
        "Context API",
        "Performance Optimization",
        "Testing with Jest",
        "TypeScript Integration"
      ],
      resources: [
        {
          name: "React Official Documentation",
          type: "documentation",
          description: "Comprehensive guide to React concepts"
        },
        {
          name: "Advanced React Patterns",
          type: "course",
          description: "Kent C. Dodds course on advanced patterns"
        }
      ]
    },
    {
      id: 2,
      name: "JavaScript",
      category: "Programming Languages",
      proficiency: "Expert",
      percentage: 92,
      icon: "Zap",
      bgColor: "bg-yellow-500",
      description: "Modern ES6+ JavaScript with deep understanding of core concepts.",
      fullDescription: `JavaScript is my strongest programming language with expertise in ES6+ features, asynchronous programming, DOM manipulation, and modern development patterns. I understand closures, prototypes, event loop, and advanced concepts like generators and proxies.`,
      projectsUsed: 15,
      yearsExperience: 3,
      trending: false,
      timeline: [
        {
          period: "2024 - Present",
          milestone: "Advanced JavaScript",
          description: "Exploring advanced concepts like generators, proxies, and performance optimization."
        },
        {
          period: "2022 - 2024",
          milestone: "ES6+ Mastery",
          description: "Mastered modern JavaScript features including async/await, destructuring, and modules."
        },
        {
          period: "2021 - 2022",
          milestone: "JavaScript Fundamentals",
          description: "Learned core JavaScript concepts, DOM manipulation, and basic programming patterns."
        }
      ],
      relatedProjects: [
        {
          name: "Interactive Data Visualizer",
          description: "Complex data manipulation and visualization",
          usage: "Core Logic",
          impact: "Enhanced user experience"
        },
        {
          name: "Real-time Chat Application",
          description: "WebSocket implementation with JavaScript",
          usage: "Full Implementation",
          impact: "Seamless communication"
        }
      ],
      keyFeatures: [
        "ES6+ Features",
        "Async/Await",
        "DOM Manipulation",
        "Event Handling",
        "Module Systems",
        "Error Handling"
      ],
      resources: [
        {
          name: "JavaScript.info",
          type: "documentation",
          description: "Modern JavaScript tutorial"
        },
        {
          name: "You Don\'t Know JS",
          type: "course",
          description: "Deep dive into JavaScript concepts"
        }
      ]
    },
    {
      id: 3,
      name: "Tailwind CSS",
      category: "Styling & Design",
      proficiency: "Advanced",
      percentage: 88,
      icon: "Palette",
      bgColor: "bg-cyan-500",
      description: "Utility-first CSS framework for rapid UI development.",
      fullDescription: `Tailwind CSS is my preferred styling solution for building responsive, maintainable user interfaces. I'm proficient in utility classes, custom configurations, component extraction, and building design systems with Tailwind.`,
      projectsUsed: 12,
      yearsExperience: 2,
      trending: true,
      timeline: [
        {
          period: "2023 - Present",
          milestone: "Advanced Tailwind",
          description: "Custom configurations, plugin development, and design system creation."
        },
        {
          period: "2022 - 2023",
          milestone: "Tailwind Fundamentals",
          description: "Learned utility-first approach and responsive design patterns."
        }
      ],
      relatedProjects: [
        {
          name: "Portfolio Website",
          description: "Personal portfolio with custom design system",
          usage: "Primary Styling",
          impact: "Consistent design language"
        },
        {
          name: "SaaS Landing Page",
          description: "Marketing website with complex layouts",
          usage: "Complete Styling",
          impact: "Faster development cycle"
        }
      ],
      keyFeatures: [
        "Utility Classes",
        "Responsive Design",
        "Custom Components",
        "Design Tokens",
        "Dark Mode",
        "Animation Utilities"
      ],
      resources: [
        {
          name: "Tailwind CSS Documentation",
          type: "documentation",
          description: "Official Tailwind CSS guide"
        },
        {
          name: "Tailwind UI Components",
          type: "resource",
          description: "Professional component library"
        }
      ]
    },
    {
      id: 4,
      name: "HTML5",
      category: "Web Technologies",
      proficiency: "Expert",
      percentage: 95,
      icon: "FileText",
      bgColor: "bg-orange-500",
      description: "Semantic HTML with accessibility and SEO best practices.",
      fullDescription: `HTML5 forms the foundation of all my web projects. I have extensive experience with semantic markup, accessibility standards (WCAG), SEO optimization, and modern HTML5 APIs including Canvas, Web Storage, and Geolocation.`,
      projectsUsed: 20,
      yearsExperience: 3,
      trending: false,
      timeline: [
        {
          period: "2024 - Present",
          milestone: "HTML5 APIs",
          description: "Working with advanced HTML5 APIs and web standards."
        },
        {
          period: "2022 - 2024",
          milestone: "Semantic HTML",
          description: "Mastered semantic markup and accessibility best practices."
        },
        {
          period: "2021 - 2022",
          milestone: "HTML Basics",
          description: "Learned fundamental HTML structure and elements."
        }
      ],
      relatedProjects: [
        {
          name: "Accessible Web App",
          description: "WCAG 2.1 AA compliant application",
          usage: "Semantic Structure",
          impact: "100% accessibility score"
        },
        {
          name: "SEO-Optimized Blog",
          description: "Content website with perfect SEO",
          usage: "Structured Markup",
          impact: "Top search rankings"
        }
      ],
      keyFeatures: [
        "Semantic Elements",
        "Accessibility (ARIA)",
        "SEO Optimization",
        "Form Validation",
        "Canvas API",
        "Web Storage"
      ],
      resources: [
        {
          name: "MDN Web Docs",
          type: "documentation",
          description: "Comprehensive HTML reference"
        },
        {
          name: "Web Accessibility Guidelines",
          type: "documentation",
          description: "WCAG 2.1 compliance guide"
        }
      ]
    },
    {
      id: 5,
      name: "CSS3",
      category: "Styling & Design",
      proficiency: "Advanced",
      percentage: 87,
      icon: "Brush",
      bgColor: "bg-blue-600",
      description: "Modern CSS with animations, grid, flexbox, and responsive design.",
      fullDescription: `CSS3 is where I bring designs to life with modern layout techniques, animations, and responsive design patterns. I'm proficient in Grid, Flexbox, CSS Variables, animations, and creating maintainable stylesheets.`,
      projectsUsed: 18,
      yearsExperience: 3,
      trending: false,
      timeline: [
        {
          period: "2023 - Present",
          milestone: "Advanced CSS",
          description: "Complex animations, CSS Grid mastery, and performance optimization."
        },
        {
          period: "2022 - 2023",
          milestone: "Modern CSS",
          description: "Learned Flexbox, Grid, and responsive design patterns."
        },
        {
          period: "2021 - 2022",
          milestone: "CSS Fundamentals",
          description: "Basic styling, selectors, and layout techniques."
        }
      ],
      relatedProjects: [
        {
          name: "Animated Landing Page",
          description: "Complex CSS animations and transitions",
          usage: "Advanced Styling",
          impact: "Engaging user experience"
        },
        {
          name: "Responsive Dashboard",
          description: "Complex grid layouts across devices",
          usage: "Layout Architecture",
          impact: "Perfect responsiveness"
        }
      ],
      keyFeatures: [
        "CSS Grid",
        "Flexbox",
        "Animations",
        "CSS Variables",
        "Media Queries",
        "Pseudo-elements"
      ],
      resources: [
        {
          name: "CSS-Tricks",
          type: "resource",
          description: "CSS techniques and best practices"
        },
        {
          name: "CSS Grid Garden",
          type: "course",
          description: "Interactive CSS Grid learning"
        }
      ]
    },
    {
      id: 6,
      name: "Git",
      category: "Development Tools",
      proficiency: "Advanced",
      percentage: 82,
      icon: "GitBranch",
      bgColor: "bg-gray-700",
      description: "Version control with branching strategies and collaboration workflows.",
      fullDescription: `Git is essential to my development workflow. I'm experienced with branching strategies, merge conflicts resolution, collaborative workflows, and advanced Git features like rebasing, cherry-picking, and hooks.`,
      projectsUsed: 25,
      yearsExperience: 2.5,
      trending: false,
      timeline: [
        {
          period: "2023 - Present",
          milestone: "Advanced Git",
          description: "Complex branching strategies, hooks, and team collaboration workflows."
        },
        {
          period: "2022 - 2023",
          milestone: "Git Workflows",
          description: "Learned branching, merging, and collaborative development practices."
        },
        {
          period: "2021 - 2022",
          milestone: "Git Basics",
          description: "Basic version control, commits, and repository management."
        }
      ],
      relatedProjects: [
        {
          name: "Team Collaboration Project",
          description: "Multi-developer project with complex branching",
          usage: "Version Control",
          impact: "Seamless team workflow"
        },
        {
          name: "Open Source Contribution",
          description: "Contributing to community projects",
          usage: "Collaborative Development",
          impact: "Community recognition"
        }
      ],
      keyFeatures: [
        "Branching Strategies",
        "Merge Conflicts",
        "Collaborative Workflows",
        "Git Hooks",
        "Rebasing",
        "Cherry-picking"
      ],
      resources: [
        {
          name: "Pro Git Book",
          type: "documentation",
          description: "Comprehensive Git reference"
        },
        {
          name: "Git Flow Workflow",
          type: "resource",
          description: "Branching model for collaboration"
        }
      ]
    },
    {
      id: 7,
      name: "TypeScript",
      category: "Programming Languages",
      proficiency: "Intermediate",
      percentage: 68,
      icon: "Code2",
      bgColor: "bg-blue-700",
      description: "Type-safe JavaScript development with advanced type system.",
      fullDescription: `TypeScript enhances my JavaScript development with static typing, better IDE support, and improved code quality. I'm comfortable with interfaces, generics, utility types, and integrating TypeScript into React projects.`,
      projectsUsed: 6,
      yearsExperience: 1.5,
      trending: true,
      timeline: [
        {
          period: "2023 - Present",
          milestone: "Advanced TypeScript",
          description: "Working with generics, utility types, and complex type definitions."
        },
        {
          period: "2022 - 2023",
          milestone: "TypeScript Basics",
          description: "Learned basic types, interfaces, and React integration."
        }
      ],
      relatedProjects: [
        {
          name: "Type-Safe API Client",
          description: "Fully typed REST API integration",
          usage: "Type Definitions",
          impact: "Zero runtime type errors"
        },
        {
          name: "React TypeScript App",
          description: "Large-scale React application with TypeScript",
          usage: "Full Implementation",
          impact: "Better code maintainability"
        }
      ],
      keyFeatures: [
        "Static Typing",
        "Interfaces",
        "Generics",
        "Utility Types",
        "React Integration",
        "Type Guards"
      ],
      resources: [
        {
          name: "TypeScript Handbook",
          type: "documentation",
          description: "Official TypeScript documentation"
        },
        {
          name: "React TypeScript Cheatsheet",
          type: "resource",
          description: "Best practices for React + TypeScript"
        }
      ]
    },
    {
      id: 8,
      name: "Node.js",
      category: "Backend Technologies",
      proficiency: "Beginner",
      percentage: 45,
      icon: "Server",
      bgColor: "bg-green-600",
      description: "Server-side JavaScript for API development and backend services.",
      fullDescription: `Node.js represents my entry into backend development. I'm learning server-side JavaScript, Express.js framework, API development, and database integration. Currently building simple REST APIs and understanding server architecture.`,
      projectsUsed: 3,
      yearsExperience: 0.8,
      trending: true,
      timeline: [
        {
          period: "2024 - Present",
          milestone: "API Development",
          description: "Building REST APIs with Express.js and database integration."
        },
        {
          period: "2023 - 2024",
          milestone: "Node.js Basics",
          description: "Learning server-side JavaScript and npm ecosystem."
        }
      ],
      relatedProjects: [
        {
          name: "Personal Blog API",
          description: "Simple REST API for blog management",
          usage: "Backend Development",
          impact: "Full-stack capability"
        },
        {
          name: "Authentication Service",
          description: "User authentication with JWT",
          usage: "Server Logic",
          impact: "Secure user management"
        }
      ],
      keyFeatures: [
        "Express.js",
        "REST APIs",
        "NPM Packages",
        "File System",
        "HTTP Modules",
        "Middleware"
      ],
      resources: [
        {
          name: "Node.js Documentation",
          type: "documentation",
          description: "Official Node.js reference"
        },
        {
          name: "Express.js Guide",
          type: "course",
          description: "Building web applications with Express"
        }
      ]
    }
  ];

  // Mock data for categories
  const categories = [
    { id: 'all', name: 'All Skills', icon: 'Grid3X3', count: skillsData.length },
    { id: 'Frontend Frameworks', name: 'Frontend', icon: 'Monitor', count: skillsData.filter(s => s.category === 'Frontend Frameworks').length },
    { id: 'Programming Languages', name: 'Languages', icon: 'Code', count: skillsData.filter(s => s.category === 'Programming Languages').length },
    { id: 'Styling & Design', name: 'Styling', icon: 'Palette', count: skillsData.filter(s => s.category === 'Styling & Design').length },
    { id: 'Web Technologies', name: 'Web Tech', icon: 'Globe', count: skillsData.filter(s => s.category === 'Web Technologies').length },
    { id: 'Development Tools', name: 'Tools', icon: 'Wrench', count: skillsData.filter(s => s.category === 'Development Tools').length },
    { id: 'Backend Technologies', name: 'Backend', icon: 'Server', count: skillsData.filter(s => s.category === 'Backend Technologies').length }
  ];

  // Mock data for currently learning skills
  const learningSkills = [
    {
      name: "Next.js",
      category: "Frontend Frameworks",
      progress: 65,
      icon: "Layers",
      bgColor: "bg-gray-800",
      description: "Learning React framework for production with SSR, SSG, and API routes.",
      startDate: "Jan 2024",
      targetDate: "Mar 2024",
      source: "Official Documentation",
      nextMilestone: "Build full-stack application with API routes"
    },
    {
      name: "MongoDB",
      category: "Databases",
      progress: 40,
      icon: "Database",
      bgColor: "bg-green-500",
      description: "NoSQL database for modern web applications with flexible schema.",
      startDate: "Feb 2024",
      targetDate: "Apr 2024",
      source: "MongoDB University",
      nextMilestone: "Complete aggregation pipeline course"
    },
    {
      name: "Docker",
      category: "DevOps",
      progress: 30,
      icon: "Package",
      bgColor: "bg-blue-400",
      description: "Containerization for consistent development and deployment environments.",
      startDate: "Mar 2024",
      targetDate: "May 2024",
      source: "Docker Official Tutorial",
      nextMilestone: "Containerize first full-stack application"
    }
  ];

  // Mock data for skill statistics
  const skillStats = [
    {
      icon: "Code",
      value: "25+",
      label: "Technologies",
      description: "Learned & Applied",
      bgColor: "bg-primary",
      trend: "+3 this month"
    },
    {
      icon: "FolderOpen",
      value: "50+",
      label: "Projects",
      description: "Built & Deployed",
      bgColor: "bg-accent",
      trend: "+5 this quarter"
    },
    {
      icon: "Clock",
      value: "2000+",
      label: "Hours",
      description: "Coding Experience",
      bgColor: "bg-warning",
      trend: "+40 weekly"
    },
    {
      icon: "TrendingUp",
      value: "85%",
      label: "Growth Rate",
      description: "Year over Year",
      bgColor: "bg-success",
      trend: "Accelerating"
    }
  ];

  // Mock data for skill combinations
  const skillCombinations = [
    {
      name: "Modern Frontend Stack",
      projectCount: 8,
      technologies: [
        { name: "React", icon: "Code", color: "text-blue-500" },
        { name: "TypeScript", icon: "Code2", color: "text-blue-700" },
        { name: "Tailwind", icon: "Palette", color: "text-cyan-500" }
      ],
      description: "My go-to combination for building scalable, maintainable frontend applications.",
      useCases: [
        "Single Page Applications",
        "Dashboard Interfaces",
        "E-commerce Platforms",
        "Portfolio Websites"
      ],
      exampleProjects: [
        { name: "E-commerce Dashboard" },
        { name: "Task Management App" }
      ],
      effectiveness: 5
    },
    {
      name: "Full-Stack Development",
      projectCount: 4,
      technologies: [
        { name: "React", icon: "Code", color: "text-blue-500" },
        { name: "Node.js", icon: "Server", color: "text-green-600" },
        { name: "JavaScript", icon: "Zap", color: "text-yellow-500" }
      ],
      description: "End-to-end development combining frontend and backend technologies.",
      useCases: [
        "REST API Development",
        "Real-time Applications",
        "Authentication Systems",
        "Data Management"
      ],
      exampleProjects: [
        { name: "Personal Blog API" },
        { name: "Chat Application" }
      ],
      effectiveness: 4
    },
    {
      name: "Responsive Design",
      projectCount: 12,
      technologies: [
        { name: "HTML5", icon: "FileText", color: "text-orange-500" },
        { name: "CSS3", icon: "Brush", color: "text-blue-600" },
        { name: "Tailwind", icon: "Palette", color: "text-cyan-500" }
      ],
      description: "Creating pixel-perfect, responsive designs that work across all devices.",
      useCases: [
        "Mobile-First Design",
        "Cross-Browser Compatibility",
        "Accessibility Compliance",
        "Performance Optimization"
      ],
      exampleProjects: [
        { name: "Portfolio Website" },
        { name: "Landing Page" }
      ],
      effectiveness: 5
    }
  ];

  // Filter skills based on active category
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredSkills(skillsData);
    } else {
      setFilteredSkills(skillsData.filter(skill => skill.category === activeCategory));
    }
  }, [activeCategory]);

  const handleSkillExpand = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Skills Laboratory - Sagar Portfolio</title>
        <meta name="description" content="Explore Sagar's technical competencies through an interactive skills showcase featuring frontend frameworks, programming languages, and development tools." />
        <meta name="keywords" content="React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Git, Node.js, frontend developer skills" />
      </Helmet>

      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Zap" size={16} />
              <span>Technical Expertise Showcase</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Skills <span className="text-gradient-primary">Laboratory</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore my technical competencies through an interactive showcase of technologies, 
              frameworks, and tools that power modern web development.
            </p>

            {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="default" size="lg" iconName="Code" iconPosition="left">
                Explore Skills
              </Button>
              <Button variant="outline" size="lg" iconName="Download" iconPosition="left">
                Download Resume
              </Button>
            </div> */}
          </div>
        </section>

        {/* Skills Statistics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SkillStats stats={skillStats} />
          </div>
        </section>

        {/* Skills Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Technical Skills</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Click on any skill card to explore detailed information, learning timeline, 
                and related projects.
              </p>
            </div>

            <CategoryFilter 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSkills.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  onExpand={handleSkillExpand}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Skill Combinations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SkillCombinations combinations={skillCombinations} />
          </div>
        </section>

        {/* Currently Learning */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <CurrentlyLearning learningSkills={learningSkills} />
          </div>
        </section>

        {/* Call to Action */}
        {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"> */}
          {/* <div className="max-w-4xl mx-auto text-center"> */}
            {/* <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Rocket" size={16} />
              <span>Ready to Collaborate</span>
            </div> */}
            
            {/* <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Build Something Amazing Together
            </h2> */}
            
            {/* <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new projects and learn emerging technologies. Let's discuss how my skills can contribute to your next big idea.
            </p> */}

            {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="Contact-Portal"></Link>
              <Button variant="default" size="lg" iconName="Mail" iconPosition="left">
                Start a Conversation
              </Button>
              <Button variant="outline" size="lg" iconName="Github" iconPosition="left">
                View My Code
              </Button>
            </div> */}
          {/* </div>
        </section> */}
      </main> 

      {/* Skill Detail Modal */}
      <SkillModal
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Code" size={18} color="white" />
              </div>
              <span className="text-lg font-bold text-gradient-primary">Sagar Portfolio</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="https://github.com/Sagar0a" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sagaranand18/" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              {/* <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Twitter" size={20} />
              </a> */}
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Sagar Portfolio. Crafted with passion and modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SkillsLaboratory;