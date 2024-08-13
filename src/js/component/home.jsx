import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      if (editIndex !== null) {
        const updatedTasks = tasks.map((task, index) =>
          index === editIndex ? newTask.trim() : task
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([newTask.trim(), ...tasks]);
        console.log(newTask)
      }
      setNewTask('');
      console.log(tasks)
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setNewTask(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h1 className="title">todos</h1>
      <div className="todo-container">
        <form onSubmit={addTask} className="input-form">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="What needs to be done?"
            className="task-input"
          />
        </form>
        <ul className="task-list">
  {tasks.map((task, index) => (
    <li key={index} className="task-item">
      <span className="task-text">{task}</span>
      <div className="row buttons">
        <button onClick={() => editTask(index)} className="edit-btn">
          <i className="fas fa-edit"></i>
        </button>
        <button onClick={() => deleteTask(index)} className="delete-btn">
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  ))}
</ul>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Honk&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

          body {
            font-family: "Raleway", sans-serif;
            font-optical-sizing: auto;
            font-weight: 200;
            font-style: normal;
            background-image: url('https://cdn.pixabay.com/photo/2012/12/24/08/39/background-72250_1280.jpg');
            background-size: cover;
            background-attachment: fixed;
            background-repeat: no-repeat;
          }

          .todo-container {
            font-family: "Raleway", sans-serif;
            font-weight: 200;
            max-width: 400px;
            margin: 40px auto;
            padding: 20px;
            background-color: white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            position: relative;
            border-radius: 0;
          }

          .todo-container::before,
          .todo-container::after {
            content: '';
            position: absolute;
            background-color: white;
            border: 1px solid #e0e0e0;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            border-radius: 0;
          }

          .todo-container::before {
            bottom: -6px;
            left: 3px;
            right: -3px;
            height: 100%;
            z-index: -1;
          }

          .todo-container::after {
            bottom: -12px;
            left: 6px;
            right: -6px;
            height: 100%;
            z-index: -2;
          }

          .title {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 20px;
            text-align: center;
            font-family: "Raleway", sans-serif;
            font-weight: 200;
            background-color: rgba(255, 255, 255, 0.8);
            padding: 10px;
            border-radius: 8px;
          }

          .input-form {
            margin-bottom: 10px;
            position: relative;
          }

          .task-input {
            width: 100%;
            border: none;
            font-size: 16px;
            padding: 10px 0;
            outline: none;
            font-family: "Raleway", sans-serif;
            font-weight: 200;
          }

          .task-input::placeholder {
            color: #999;
          }

          .input-form::after {
            content: '';
            position: absolute;
            left: -20px;
            right: -20px;
            bottom: -10px;
            height: 1px;
            background-color: #eee;
          }

          .task-list {
            list-style-type: none;
            padding: 0;
          }

          .task-item {
            padding: 10px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            font-family: "Raleway", sans-serif;
            font-weight: 200;
          }

          .task-text {
            flex-grow: 1;
            margin-right: 10px;
          }

       .button1 {
       }

       .button2 {
       padding:}

          .edit-btn, .delete-btn {
            background: none;
            border: none;
            font-size: 20px;
            color: #999;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            width: 30px;
            height: 30px;
            margin-left: 10px;
          }


          .edit-btn {
            margin-right: 10px;
            padding-right: 70px
          }

          .task-item:hover .edit-btn,
          .task-item:hover .delete-btn {
            opacity: 1;
          }

          .task-item::after {
            content: '';
            position: absolute;
            left: -20px;
            right: -20px;
            bottom: 0;
            height: 1px;
            background-color: #eee;
          }
        `}</style>
      </div>
    </div>
  );
};

export default TodoList;