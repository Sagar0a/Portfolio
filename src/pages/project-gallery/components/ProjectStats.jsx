import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ projects }) => {
  const totalProjects = projects.length;
  const totalStars = projects.reduce((sum, project) => sum + project.stars, 0);
  const totalForks = projects.reduce((sum, project) => sum + project.forks, 0);
  const totalViews = projects.reduce((sum, project) => sum + project.views, 0);

  const stats = [
    {
      label: 'Total Projects',
      value: totalProjects,
      icon: 'FolderOpen',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      label: 'GitHub Stars',
      value: totalStars,
      icon: 'Star',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      label: 'Total Forks',
      value: totalForks,
      icon: 'GitFork',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      label: 'Project Views',
      value: totalViews.toLocaleString(),
      icon: 'Eye',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`p-4 rounded-xl border ${stat.bgColor} ${stat.borderColor} transition-all duration-200 hover:shadow-md`}
        >
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg bg-white/80 ${stat.color}`}>
              <Icon name={stat.icon} size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;