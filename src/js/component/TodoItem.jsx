import React from 'react';

const TodoItem = ({ task, onEdit, onDelete }) => {
  return (
    <li className="task-item">
      <span className="task-text">{task}</span>
      <div className="task-buttons">
        <button onClick={onEdit} className="edit-btn">
          <i className="fas fa-edit"></i>
        </button>
        <button onClick={onDelete} className="delete-btn">
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;