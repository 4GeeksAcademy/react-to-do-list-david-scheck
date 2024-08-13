import React from 'react';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="title">todos</h1>
      <TodoList />
    </div>
  );
};

export default App;