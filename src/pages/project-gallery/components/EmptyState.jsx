import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmptyState = ({ onClearFilters, hasFilters }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
          <Icon name="Search" size={32} className="text-muted-foreground" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {hasFilters ? 'No projects match your filters' : 'No projects found'}
        </h3>
        <p className="text-muted-foreground mb-6">
          {hasFilters 
            ? 'Try adjusting your filters to see more projects, or clear all filters to view the complete portfolio.'
            : 'It looks like there are no projects to display at the moment. Check back soon for updates!'
          }
        </p>

        {/* Actions */}
        {hasFilters && (
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="default"
              iconName="RotateCcw"
              iconPosition="left"
              onClick={onClearFilters}
            >
              Clear All Filters
            </Button>
            <Button
              variant="outline"
              iconName="Github"
              iconPosition="left"
              onClick={() => window.open('https://github.com/sagar0a', '_blank')}
            >
              View GitHub
            </Button>
          </div>
        )}

        {/* Suggestions */}
        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h4 className="font-medium text-foreground mb-2">Suggestions:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Try selecting "All" in category filters</li>
            <li>• Check different technology stacks</li>
            <li>• Browse featured projects first</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;