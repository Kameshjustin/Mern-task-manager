import React from 'react';
import '../styles/TaskStats.css';

const TaskStats = ({ stats }) => {
  const statCards = [
    {
      label: 'Total Tasks',
      value: stats.total,
      color: '#0066ff',
      icon: '📋'
    },
    {
      label: 'Completed',
      value: stats.completed,
      color: '#00c853',
      icon: '✅'
    },
    {
      label: 'In Progress',
      value: stats.inProgress,
      color: '#ffa000',
      icon: '⚡'
    },
    {
      label: 'Pending',
      value: stats.pending,
      color: '#d32f2f',
      icon: '⏳'
    }
  ];

  const completionRate = stats.total > 0 
    ? Math.round((stats.completed / stats.total) * 100) 
    : 0;

  return (
    <div className="stats-container fade-in">
      <div className="stats-grid">
        {statCards.map((stat, index) => (
          <div 
            key={stat.label} 
            className="stat-card"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              borderLeft: `4px solid ${stat.color}`
            }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {stats.total > 0 && (
        <div className="completion-rate">
          <div className="completion-header">
            <span>Completion Rate</span>
            <span className="completion-percentage">{completionRate}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskStats;
