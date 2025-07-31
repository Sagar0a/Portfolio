import React, { useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-background border border-border rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon name="FolderOpen" size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
              <p className="text-muted-foreground">{project.category} • {project.year}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
          >
            <Icon name="X" size={24} className="text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-6 space-y-8">
            {/* Project Image */}
            <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden bg-muted">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                {/* <Button
                  variant="secondary"
                  size="sm"
                  iconName="ExternalLink"
                  iconPosition="left"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className="bg-white/90 text-black hover:bg-white"
                >
                  Live Demo
                </Button> */}
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Github"
                  iconPosition="left"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  className=" bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  View Code
                </Button>
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Project Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Problem & Solution */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Problem & Solution</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <h4 className="font-medium text-red-800 mb-2 flex items-center">
                        <Icon name="AlertCircle" size={16} className="mr-2" />
                        Challenge
                      </h4>
                      <p className="text-red-700 text-sm">{project.challenge}</p>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2 flex items-center">
                        <Icon name="CheckCircle" size={16} className="mr-2" />
                        Solution
                      </h4>
                      <p className="text-green-700 text-sm">{project.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
                        <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Snippet */}
                {project.codeSnippet && (
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Code Highlight</h3>
                    <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-slate-100">
                        <code>{project.codeSnippet}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Project Stats */}
                <div className="bg-muted rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-4">Project Stats</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon name="Star" size={16} className="text-yellow-500" />
                        <span className="text-sm text-muted-foreground">Stars</span>
                      </div>
                      <span className="font-medium text-foreground">{project.stars}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon name="GitFork" size={16} className="text-blue-500" />
                        <span className="text-sm text-muted-foreground">Forks</span>
                      </div>
                      <span className="font-medium text-foreground">{project.forks}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon name="Eye" size={16} className="text-green-500" />
                        <span className="text-sm text-muted-foreground">Views</span>
                      </div>
                      <span className="font-medium text-foreground">{project.views}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon name="Calendar" size={16} className="text-purple-500" />
                        <span className="text-sm text-muted-foreground">Created</span>
                      </div>
                      <span className="font-medium text-foreground">{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="bg-muted rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-background text-foreground text-sm rounded-lg border border-border font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Lessons Learned */}
                <div className="bg-muted rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-4">Lessons Learned</h3>
                  <div className="space-y-2">
                    {project.lessons.map((lesson, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Icon name="Lightbulb" size={14} className="text-yellow-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{lesson}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {/* <Button
                    variant="default"
                    fullWidth
                    iconName="ExternalLink"
                    iconPosition="left"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    View Live Demo
                  </Button> */}
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Github"
                    iconPosition="left"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    View Source Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;