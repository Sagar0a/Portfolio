import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CurrentlyLearning = ({ learningSkills }) => {
  return (
    <div className="card-elevated p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
          <Icon name="BookOpen" size={24} color="white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Currently Learning</h2>
          <p className="text-muted-foreground">Expanding my technical horizons</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learningSkills.map((skill, index) => (
          <div key={index} className="relative p-6 bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl border border-border/50">
            <div className="absolute top-3 right-3">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-10 h-10 rounded-lg ${skill.bgColor} flex items-center justify-center`}>
                <Icon name={skill.icon} size={20} color="white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.category}</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Progress</span>
                <span className="text-sm font-medium text-foreground">{skill.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="h-2 bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-500 animate-progress-fill"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                {/* <span className="text-xs text-muted-foreground">Started</span>
                <span className="text-xs font-medium text-foreground">{skill.startDate}</span> */}
              </div>
              <div className="flex items-center justify-between">
                {/* <span className="text-xs text-muted-foreground">Target Completion</span>
                <span className="text-xs font-medium text-foreground">{skill.targetDate}</span> */}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Learning Source</span>
                <span className="text-xs font-medium text-foreground">Online</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border/50">
              {/* <div className="flex items-center space-x-2">
                <Icon name="Target" size={14} className="text-accent" />
                <span className="text-xs text-muted-foreground">Next Milestone:</span>
              </div> */}
              <p className="text-sm text-foreground mt-1">{skill.nextMilestone}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-8 text-center">
        <Button variant="outline" iconName="Plus" iconPosition="left">
          View Learning Roadmap
        </Button>
      </div> */}
    </div>
  );
};

export default CurrentlyLearning;