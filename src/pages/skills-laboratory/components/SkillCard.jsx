import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const SkillCard = ({ skill, onExpand }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getProficiencyColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-accent';
      case 'Advanced':
        return 'bg-primary';
      case 'Intermediate':
        return 'bg-warning';
      case 'Beginner':
        return 'bg-secondary';
      default:
        return 'bg-muted';
    }
  };

  const getProficiencyWidth = (level) => {
    switch (level) {
      case 'Expert':
        return 'w-full';
      case 'Advanced':
        return 'w-4/5';
      case 'Intermediate':
        return 'w-3/5';
      case 'Beginner':
        return 'w-2/5';
      default:
        return 'w-1/5';
    }
  };

  return (
    <div
      className={`card-elevated p-6 cursor-pointer transition-all duration-300 transform ${
        isHovered ? 'scale-105 shadow-lg' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onExpand(skill)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-lg ${skill.bgColor} flex items-center justify-center`}>
            <Icon name={skill.icon} size={24} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
            <p className="text-sm text-muted-foreground">{skill.category}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProficiencyColor(skill.proficiency)} text-white`}>
            {skill.proficiency}
          </span>
          <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Proficiency</span>
          <span className="text-sm font-medium text-foreground">{skill.percentage}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className={`h-2 rounded-full ${getProficiencyColor(skill.proficiency)} ${getProficiencyWidth(skill.proficiency)} transition-all duration-500`}
          ></div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground line-clamp-2">{skill.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {skill.projectsUsed} projects • {skill.yearsExperience} years
          </span>
          <div className="flex items-center space-x-1">
            {skill.trending && (
              <div className="flex items-center space-x-1">
                <Icon name="TrendingUp" size={12} className="text-accent" />
                <span className="text-xs text-accent">Trending</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;