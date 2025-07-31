import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const NavigationCard = ({ item, isActive, onClick }) => {
  return (
    <Link
      to={item.path}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
        isActive
          ? 'bg-gradient-to-br from-primary to-accent text-white shadow-md'
          : 'bg-card hover:bg-muted border border-border'
      }`}
    >
      <div className="relative z-10">
        <div className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg transition-colors duration-200 ${
          isActive 
            ? 'bg-white/20 text-white' :'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
        }`}>
          <Icon name={item.icon} size={24} strokeWidth={2} />
        </div>
        
        <h3 className={`text-lg font-semibold mb-2 transition-colors duration-200 ${
          isActive ? 'text-white' : 'text-foreground'
        }`}>
          {item.name}
        </h3>
        
        <p className={`text-sm leading-relaxed transition-colors duration-200 ${
          isActive ? 'text-white/90' : 'text-muted-foreground'
        }`}>
          {item.description}
        </p>
        
        <div className={`mt-4 flex items-center text-sm font-medium transition-colors duration-200 ${
          isActive ? 'text-white' : 'text-primary group-hover:text-accent'
        }`}>
          <span>Explore</span>
          <Icon name="ArrowRight" size={16} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
};

export default NavigationCard;