import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectModal from './components/ProjectModal';
import ProjectStats from './components/ProjectStats';
import EmptyState from './components/EmptyState';
import { useQuery } from '@tanstack/react-query';



const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing online store operations with real-time analytics and inventory management.",
      longDescription: `A full-featured e-commerce dashboard built with React and modern web technologies. This project demonstrates my ability to create complex, data-driven applications with intuitive user interfaces. The dashboard includes comprehensive analytics, inventory management, order processing, and customer relationship management features.

The application showcases advanced React patterns, state management with Redux Toolkit, and integration with various APIs. Special attention was paid to performance optimization, accessibility, and responsive design principles.`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Chart.js"],
      year: "2024",
      status: "Featured",
      stars: 45,
      forks: 12,
      views: 125,
      liveUrl: "https://ecommerce-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/sagar0a",
      challenge: "Creating a scalable dashboard that could handle large datasets while maintaining smooth user experience and real-time updates.",
      solution: "Implemented virtual scrolling for large lists, optimized API calls with caching, and used WebSocket connections for real-time data updates.",
      features: [
        "Real-time sales analytics",
        "Inventory management system",
        "Customer relationship management",
        "Order processing workflow",
        "Revenue tracking and reporting",
        "Multi-user role management"
      ],
      lessons: [
        "Importance of performance optimization in data-heavy applications",
        "Effective state management patterns for complex UIs",
        "Real-time data synchronization challenges and solutions"
      ],
      codeSnippet: `// Real-time dashboard updates with WebSocket
const useDashboardData = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    
    ws.onmessage = (event) => {
      const update = JSON.parse(event.data);
      setData(prev => ({
        ...prev,
        [update.type]: update.data
      }));
    };
    
    return () => ws.close();
  }, []);
  
  return data;
};`
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking.",
      longDescription: `A modern task management application inspired by tools like Trello and Asana. This project showcases my skills in creating interactive user interfaces with complex state management and real-time collaboration features.

The application features a kanban-style board with drag-and-drop functionality, team collaboration tools, deadline tracking, and comprehensive project management capabilities. Built with React and integrated with Firebase for real-time synchronization.`,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      category: "Frontend",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion", "React DnD"],
      year: "2024",
      status: "New",
      stars: 32,
      forks: 8,
      views: 890,
      liveUrl: "https://task-manager-sagar.netlify.app",
      githubUrl: "https://github.com/sagar0a",
      challenge: "Implementing smooth drag-and-drop interactions while maintaining data consistency across multiple users in real-time.",
      solution: "Used React DnD for drag-and-drop functionality combined with Firebase real-time database for instant synchronization across all connected clients.",
      features: [
        "Drag-and-drop task management",
        "Real-time team collaboration",
        "Project timeline tracking",
        "File attachment support",
        "Comment and discussion threads",
        "Custom task categories and labels"
      ],
      lessons: [
        "Complex state synchronization in real-time applications",
        "User experience design for collaborative tools",
        "Performance optimization for drag-and-drop interfaces"
      ],
      codeSnippet: `// Drag and drop task implementation
const TaskCard = ({ task, onMove }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'task',
    item: { id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={\`task-card \${isDragging ? 'dragging' : ''}\`}
    >
      {task.title}
    </div>
  );
};`
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      longDescription: `A comprehensive weather application that provides detailed weather information with an intuitive and visually appealing interface. The app demonstrates my ability to work with external APIs, handle geolocation data, and create responsive, mobile-first designs.

Features include current weather conditions, 7-day forecasts, interactive weather maps, and detailed analytics. The application is optimized for performance and provides offline functionality for previously viewed locations.`,
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      category: "Frontend",
      technologies: ["React", "OpenWeather API", "Mapbox", "PWA", "Service Workers"],
      year: "2024",
      status: "New",
      stars: 28,
      forks: 15,
      views: 110,
      liveUrl: "https://weather-app-sagar.vercel.app",
      githubUrl: "https://github.com/sagar0a",
      challenge: "Creating a responsive weather app that works offline and provides accurate location-based forecasts with smooth animations.",
      solution: "Implemented Progressive Web App features with service workers for offline functionality and used Mapbox for interactive weather visualization.",
      features: [
        "Current weather conditions",
        "7-day weather forecast",
        "Interactive weather maps",
        "Location-based services",
        "Offline functionality",
        "Weather alerts and notifications"
      ],
      lessons: [
        "Working with geolocation and mapping APIs",
        "Implementing Progressive Web App features",
        "Handling API rate limiting and error states"
      ],
      codeSnippet: `// Weather data fetching with error handling
const useWeatherData = (location) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          \`\${API_URL}?lat=\${location.lat}&lon=\${location.lon}&appid=\${API_KEY}\`
        );
        
        if (!response.ok) throw new Error('Weather data unavailable');
        
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (location) fetchWeather();
  }, [location]);

  return { weather, loading, error };
};`
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my development journey, projects, and technical skills with interactive elements.",
      longDescription: `My personal portfolio website built with React and modern web technologies. This project represents my growth as a frontend developer and showcases my ability to create engaging, interactive web experiences.

The portfolio features smooth animations, responsive design, interactive project showcases, and a clean, professional aesthetic. It demonstrates my understanding of modern web development practices, performance optimization, and user experience design.`,
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      category: "Frontend",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "React Router", "Vite"],
      year: "2025",
      status: "Recent One",
      stars: 18,
      forks: 5,
      views: 750,
      liveUrl: "https://sagar-portfolio.vercel.app",
      githubUrl: "https://github.com/sagar/portfolio",
      challenge: "Creating a portfolio that stands out while maintaining professional appeal and showcasing technical skills effectively.",
      solution: "Focused on clean design, smooth animations, and interactive elements that demonstrate technical capabilities without overwhelming the user.",
      features: [
        "Responsive design across all devices",
        "Smooth scroll animations",
        "Interactive project showcases",
        "Contact form with validation",
        "Dark/light theme toggle",
        "SEO optimized content"
      ],
      lessons: [
        "Importance of personal branding in web development",
        "Balancing creativity with professionalism",
        "Performance optimization for animation-heavy sites"
      ],
      codeSnippet: `// Smooth scroll animation hook
const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
};`
    },
    {
      id: 5,
      title: "Recipe Finder App",
      description: "A recipe discovery application with ingredient-based search, nutritional information, and meal planning features.",
      longDescription: `A comprehensive recipe application that helps users discover new recipes based on available ingredients. The app integrates with multiple recipe APIs to provide diverse cooking options and includes features for meal planning and nutritional tracking.

This project demonstrates my ability to work with complex API integrations, implement search functionality, and create user-friendly interfaces for content discovery. The application includes advanced filtering options and personalized recommendations.`,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      category: "Frontend",
      technologies: ["React", "Recipe API", "Local Storage", "CSS Modules", "React Query"],
      year: "2025",
      status: "New",
      stars: 22,
      forks: 7,
      views: 650,
      liveUrl: "https://recipe-finder-sagar.netlify.app",
      githubUrl: "https://github.com/sagar0a",
      challenge: "Creating an intuitive recipe search experience with complex filtering options and ingredient-based recommendations.",
      solution: "Implemented advanced search algorithms with debouncing, used React Query for efficient API caching, and created a flexible filtering system.",
      features: [
        "Ingredient-based recipe search",
        "Nutritional information display",
        "Meal planning calendar",
        "Recipe favorites and collections",
        "Shopping list generation",
        "Dietary restriction filters"
      ],
      lessons: [
        "Complex search and filtering implementation",
        "API data caching and optimization strategies",
        "User experience design for content discovery"
      ],
      codeSnippet: `// Recipe search with debouncing
const useRecipeSearch = (query, filters) => {
  const [debouncedQuery] = useDebounce(query, 500);
  
  return useQuery({
    queryKey: ['recipes', debouncedQuery, filters],
    queryFn: () => searchRecipes(debouncedQuery, filters),
    enabled: debouncedQuery.length > 2,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};`
    },
    {
      id: 6,
      title: "Expense Tracker",
      description: "A personal finance management app with expense categorization, budget tracking, and financial insights visualization.",
      longDescription: `A comprehensive expense tracking application that helps users manage their personal finances effectively. The app provides detailed insights into spending patterns, budget management, and financial goal tracking.

Built with React and Chart.js for data visualization, this project showcases my ability to work with financial data, create meaningful analytics, and design user-friendly interfaces for complex data management tasks.`,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      category: "Frontend",
      technologies: ["React", "Chart.js", "Local Storage", "Date-fns", "React Hook Form"],
      year: "2024",
      status: "Completed",
      stars: 15,
      forks: 4,
      views: 480,
      liveUrl: "https://expense-tracker-sagar.vercel.app",
      githubUrl: "https://github.com/sagar0a",
      challenge: "Creating an intuitive interface for complex financial data while ensuring data privacy and security.",
      solution: "Used local storage for data persistence, implemented comprehensive data validation, and created clear visualizations for financial insights.",
      features: [
        "Expense categorization and tagging",
        "Budget creation and monitoring",
        "Financial insights and analytics",
        "Recurring expense management",
        "Export data functionality",
        "Multi-currency support"
      ],
      lessons: [
        "Financial data handling and validation",
        "Creating meaningful data visualizations",
        "User privacy considerations in financial apps"
      ],
      codeSnippet: `// Expense analytics calculation
const useExpenseAnalytics = (expenses) => {
  return useMemo(() => {
    const categoryTotals = expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {});
    
    const monthlyTrend = expenses
      .filter(expense => isWithinInterval(expense.date, {
        start: startOfYear(new Date()),
        end: new Date()
      }))
      .reduce((acc, expense) => {
        const month = format(expense.date, 'MMM yyyy');
        acc[month] = (acc[month] || 0) + expense.amount;
        return acc;
      }, {});
    
    return { categoryTotals, monthlyTrend };
  }, [expenses]);
};`
    }
  ];

  // Get unique categories and technologies
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const technologies = ['All', ...new Set(projects.flatMap(p => p.technologies))];

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
      const technologyMatch = selectedTechnology === 'All' || project.technologies.includes(selectedTechnology);
      return categoryMatch && technologyMatch;
    });
  }, [projects, selectedCategory, selectedTechnology]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedTechnology('All');
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedTechnology !== 'All';

  return (
    <>
      <Helmet>
        <title>Project Gallery - Sagar Portfolio</title>
        <meta name="description" content="Explore Sagar's portfolio of web development projects including React applications, full-stack solutions, and interactive user interfaces." />
        <meta name="keywords" content="React projects, web development portfolio, frontend projects, JavaScript applications" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="max-w-7xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <Icon name="FolderOpen" size={32} className="text-primary" />
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Project <span className="text-gradient-primary">Gallery</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Explore my journey through code with interactive projects that showcase technical growth, 
                problem-solving skills, and passion for creating meaningful digital experiences.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Icon name="Code" size={20} />
                  <span>6 Featured Projects</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Icon name="Star" size={20} />
                  <span>100 GitHub Stars</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Icon name="Eye" size={20} />
                  <span>5K+ Project Views</span>
                </div>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Project Statistics */}
              <ProjectStats projects={projects} />

              {/* Project Filters */}
              <ProjectFilter
                categories={categories}
                technologies={technologies}
                selectedCategory={selectedCategory}
                selectedTechnology={selectedTechnology}
                onCategoryChange={setSelectedCategory}
                onTechnologyChange={setSelectedTechnology}
                onClearFilters={handleClearFilters}
                projectCount={filteredProjects.length}
              />

              {/* Projects Grid */}
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState 
                  onClearFilters={handleClearFilters}
                  hasFilters={hasActiveFilters}
                />
              )}

              {/* Call to Action */}
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Interested in Working Together?
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    I'm always excited to take on new challenges and collaborate on innovative projects. Let's discuss how we can bring your ideas to life.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => window.open('mailto:sagaranand182005@gmail.com', '_blank')}
                      className="btn-primary px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
                    >
                      <Icon name="Mail" size={20} />
                      <span>Get In Touch</span>
                    </button>
                    <button
                      onClick={() => window.open('https://github.com/sagar0a', '_blank')}
                      className="btn-secondary px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
                    >
                      <Icon name="Github" size={20} />
                      <span>View All Projects</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
};

export default ProjectGallery;