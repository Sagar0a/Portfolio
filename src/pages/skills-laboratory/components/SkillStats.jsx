import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div key={index} className="card-elevated p-6 text-center">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
            <Icon name={stat.icon} size={28} color="white" />
          </div>
          <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
          <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
          <div className="text-xs text-muted-foreground">{stat.description}</div>
          {stat.trend && (
            <div className="flex items-center justify-center space-x-1 mt-2">
              <Icon name="TrendingUp" size={12} className="text-accent" />
              <span className="text-xs text-accent">{stat.trend}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SkillStats;