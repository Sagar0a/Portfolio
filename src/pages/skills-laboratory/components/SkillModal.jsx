import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillModal = ({ skill, isOpen, onClose }) => {
  if (!isOpen || !skill) return null;

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-16 h-16 rounded-xl ${skill.bgColor} flex items-center justify-center`}>
              <Icon name={skill.icon} size={32} color="white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{skill.name}</h2>
              <p className="text-muted-foreground">{skill.category}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={24} />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          {/* Proficiency Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Proficiency Level</h3>
            <div className="flex items-center justify-between mb-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getProficiencyColor(skill.proficiency)} text-white`}>
                {skill.proficiency}
              </span>
              <span className="text-lg font-bold text-foreground">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div
                className={`h-3 rounded-full ${getProficiencyColor(skill.proficiency)} transition-all duration-1000`}
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About This Skill</h3>
            <p className="text-muted-foreground leading-relaxed">{skill.fullDescription}</p>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Learning Timeline</h3>
            <div className="space-y-3">
              {skill.timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-foreground">{item.period}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{item.milestone}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Using This Skill */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Projects Using {skill.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skill.relatedProjects.map((project, index) => (
                <div key={index} className="card-elevated p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Code" size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-1">{project.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-muted px-2 py-1 rounded">{project.usage}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{project.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Key Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skill.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg">
                  <Icon name="Check" size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Learning Resources</h3>
            <div className="space-y-2">
              {skill.resources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name={resource.type === 'course' ? 'BookOpen' : resource.type === 'documentation' ? 'FileText' : 'ExternalLink'} size={16} className="text-muted-foreground" />
                    <div>
                      <span className="text-sm font-medium text-foreground">{resource.name}</span>
                      <p className="text-xs text-muted-foreground">{resource.description}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Icon name="ExternalLink" size={14} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillModal;