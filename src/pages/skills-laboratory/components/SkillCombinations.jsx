import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillCombinations = ({ combinations }) => {
  const [selectedCombination, setSelectedCombination] = useState(null);

  return (
    <div className="card-elevated p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Skill Combinations</h2>
          <p className="text-muted-foreground">How I combine technologies to build solutions</p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Layers" size={24} className="text-primary" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {combinations.map((combo, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
              selectedCombination === index
                ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 bg-background'
            }`}
            onClick={() => setSelectedCombination(selectedCombination === index ? null : index)}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">{combo.name}</h3>
              <div className="flex items-center space-x-1">
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                  {combo.projectCount} projects
                </span>
                <Icon 
                  name={selectedCombination === index ? "ChevronUp" : "ChevronDown"} 
                  size={16} 
                  className="text-muted-foreground" 
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {combo.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="flex items-center space-x-1 bg-muted px-2 py-1 rounded-lg">
                  <Icon name={tech.icon} size={14} className={tech.color} />
                  <span className="text-xs font-medium text-foreground">{tech.name}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mb-4">{combo.description}</p>

            {selectedCombination === index && (
              <div className="space-y-4 pt-4 border-t border-border">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Use Cases</h4>
                  <ul className="space-y-1">
                    {combo.useCases.map((useCase, ucIndex) => (
                      <li key={ucIndex} className="flex items-start space-x-2">
                        <Icon name="ArrowRight" size={12} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Example Projects</h4>
                  <div className="space-y-2">
                    {combo.exampleProjects.map((project, projIndex) => (
                      <div key={projIndex} className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Icon name="Code" size={14} className="text-primary" />
                          <span className="text-sm font-medium text-foreground">{project.name}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Icon name="ExternalLink" size={12} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Star" size={14} className="text-warning" />
                    <span className="text-sm text-muted-foreground">Effectiveness</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <Icon
                        key={starIndex}
                        name="Star"
                        size={12}
                        className={starIndex < combo.effectiveness ? "text-warning" : "text-muted"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCombinations;