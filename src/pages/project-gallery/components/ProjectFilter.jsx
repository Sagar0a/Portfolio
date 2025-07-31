import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ 
  categories, 
  technologies, 
  selectedCategory, 
  selectedTechnology, 
  onCategoryChange, 
  onTechnologyChange,
  onClearFilters,
  projectCount 
}) => {
  const hasActiveFilters = selectedCategory !== 'All' || selectedTechnology !== 'All';

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Filter Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon name="Filter" size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Filter Projects</h3>
              <p className="text-sm text-muted-foreground">
                Showing {projectCount} project{projectCount !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              iconPosition="left"
              onClick={onClearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              Clear
            </Button>
          )}
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Category Filter */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-foreground">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Technology Filter */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-foreground">Technology</label>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 6).map((tech) => (
                <button
                  key={tech}
                  onClick={() => onTechnologyChange(tech)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                    selectedTechnology === tech
                      ? 'bg-accent text-white shadow-sm'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                  }`}
                >
                  <span>{tech}</span>
                </button>
              ))}
              {technologies.length > 6 && (
                <div className="relative group">
                  <button className="px-3 py-2 text-sm font-medium rounded-lg bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-all duration-200">
                    +{technologies.length - 6} more
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <div className="p-2 space-y-1">
                      {technologies.slice(6).map((tech) => (
                        <button
                          key={tech}
                          onClick={() => onTechnologyChange(tech)}
                          className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-150 ${
                            selectedTechnology === tech
                              ? 'bg-accent text-white' :'text-popover-foreground hover:bg-muted'
                          }`}
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {selectedCategory !== 'All' && (
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md flex items-center space-x-1">
                <span>{selectedCategory}</span>
                <button
                  onClick={() => onCategoryChange('All')}
                  className="hover:text-primary/80"
                >
                  <Icon name="X" size={12} />
                </button>
              </span>
            )}
            {selectedTechnology !== 'All' && (
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md flex items-center space-x-1">
                <span>{selectedTechnology}</span>
                <button
                  onClick={() => onTechnologyChange('All')}
                  className="hover:text-accent/80"
                >
                  <Icon name="X" size={12} />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectFilter;