import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
            activeCategory === category.id
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
          }`}
        >
          <Icon name={category.icon} size={16} />
          <span className="text-sm font-medium">{category.name}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            activeCategory === category.id
              ? 'bg-primary-foreground/20 text-primary-foreground'
              : 'bg-background text-muted-foreground'
          }`}>
            {category.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;