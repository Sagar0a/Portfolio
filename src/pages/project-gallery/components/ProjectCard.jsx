import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center space-x-3 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
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
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            Code
          </Button>
        </div>

        {/* Status Badge */}
        {project.status && (
          <div className="absolute top-3 right-3">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              project.status === 'Featured' ?'bg-accent text-white' 
                : project.status === 'New' ?'bg-primary text-white' :'bg-muted text-muted-foreground'
            }`}>
              {project.status}
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Icon name="Calendar" size={14} />
            <span className="text-xs">{project.year}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Project Stats */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={12} />
              <span>{project.stars}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="GitFork" size={12} />
              <span>{project.forks}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Eye" size={12} />
              <span>{project.views}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <div className={`w-2 h-2 rounded-full ${
              project.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'
            }`}></div>
            <span>{project.status === 'Active' ? 'Active' : 'Completed'}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            iconName="Info"
            iconPosition="left"
            onClick={() => onViewDetails(project)}
            className="text-primary hover:text-primary/80"
          >
            View Details
          </Button>
          
          <div className="flex items-center space-x-2">
            {/* <button
              onClick={() => window.open(project.liveUrl, '_blank')}
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
              title="Live Demo"
            >
              <Icon name="ExternalLink" size={16} className="text-muted-foreground hover:text-foreground" />
            </button> */}
            <button
              onClick={() => window.open(project.githubUrl, '_blank')}
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
              title="View Code"
            >
              <Icon name="Github" size={16} className="text-muted-foreground hover:text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;