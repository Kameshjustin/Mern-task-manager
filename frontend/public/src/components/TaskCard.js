import React from 'react';
import { format } from 'date-fns';
import '../styles/TaskCard.css';

const TaskCard = ({ task, onEdit, onDelete, index }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#d32f2f';
      case 'medium': return '#ffa000';
      case 'low': return '#00c853';
      default: return '#6c757d';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#00c853';
      case 'in-progress': return '#0066ff';
      case 'pending': return '#ffa000';
      default: return '#6c757d';
    }
  };

  return (
    <div 
      className="task-card slide-in" 
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="task-header">
        <div className="task-badges">
          <span 
            className="badge priority-badge"
            style={{ background: getPriorityColor(task.priority) }}
          >
            {task.priority}
          </span>
          <span 
            className="badge status-badge"
            style={{ background: getStatusColor(task.status) }}
          >
            {task.status.replace('-', ' ')}
          </span>
        </div>
      </div>

      <div className="task-body">
        <h3 className="task-title">{task.title}</h3>
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
        
        {task.tags && task.tags.length > 0 && (
          <div className="task-tags">
            {task.tags.map((tag, idx) => (
              <span key={idx} className="tag">#{tag}</span>
            ))}
          </div>
        )}
      </div>

      <div className="task-footer">
        <div className="task-dates">
          {task.dueDate && (
            <div className="date-info">
              <span className="date-label">Due:</span>
              <span className="date-value">
                {format(new Date(task.dueDate), 'MMM dd, yyyy')}
              </span>
            </div>
          )}
          <div className="date-info">
            <span className="date-label">Created:</span>
            <span className="date-value">
              {format(new Date(task.createdAt), 'MMM dd, yyyy')}
            </span>
          </div>
        </div>

        <div className="task-actions">
          <button 
            className="btn-edit"
            onClick={() => onEdit(task)}
          >
            Edit
          </button>
          <button 
            className="btn-delete"
            onClick={() => onDelete(task._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
