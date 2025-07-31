import React from 'react';
import Icon from '../../../components/AppIcon';

const NavigationStats = () => {
  const stats = [
    {
      icon: 'Eye',
      label: 'Page Views',
      value: '2,847',
      change: '+12%',
      changeType: 'positive',
      description: 'Total portfolio visits this month'
    },
    {
      icon: 'Clock',
      label: 'Avg. Time',
      value: '3:42',
      change: '+8%',
      changeType: 'positive',
      description: 'Average time spent exploring'
    },
    {
      icon: 'Users',
      label: 'Unique Visitors',
      value: '1,234',
      change: '+15%',
      changeType: 'positive',
      description: 'Individual users this month'
    },
    {
      icon: 'Download',
      label: 'Resume Downloads',
      value: '89',
      change: '+23%',
      changeType: 'positive',
      description: 'CV downloads this month'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mr-3">
          <Icon name="BarChart3" size={20} color="white" strokeWidth={2} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Portfolio Analytics</h3>
          <p className="text-sm text-muted-foreground">Performance insights</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={stat.icon} size={16} className="text-primary" strokeWidth={2} />
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                stat.changeType === 'positive' ?'bg-accent/10 text-accent' :'bg-error/10 text-error'
              }`}>
                {stat.change}
              </span>
            </div>
            
            <div className="mb-1">
              <div className="text-xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm font-medium text-foreground">{stat.label}</div>
            </div>
            
            <p className="text-xs text-muted-foreground leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Last updated</span>
          <div className="flex items-center text-sm text-foreground">
            <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
            <span>Live data</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationStats;