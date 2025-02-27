import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { FaCheck, FaEdit, FaTimes, FaCalendarAlt } from 'react-icons/fa';
import addSound from './Sounds/Complete.wav';

const TodoApp = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [newTask, setNewTask] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskValue, setEditingTaskValue] = useState('');
  const [editingDueDate, setEditingDueDate] = useState('');
  const [deletingTaskId, setDeletingTaskId] = useState(null);

  const dateInputRef = useRef(null);
  const audioRef = useRef(new Audio(addSound));

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false, dueDate: newDueDate || null }]);
      setNewTask('');
      setNewDueDate('');
    }
  };

  const toggleCompleteTask = (id) => {
    audioRef.current.play();
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setDeletingTaskId(id);
    setTimeout(() => {
      setTasks(tasks.filter(task => task.id !== id)); 
      setDeletingTaskId(null);
    }, 300); 
  };

  const startEditingTask = (id, text, dueDate) => {
    setEditingTaskId(id);
    setEditingTaskValue(text);
    setEditingDueDate(dueDate || '');
  };

  const saveEditingTask = () => {
    setTasks(tasks.map(task =>
      task.id === editingTaskId
        ? { ...task, text: editingTaskValue, dueDate: editingDueDate || null }
        : task
    ));
    setEditingTaskId(null);
    setEditingTaskValue('');
    setEditingDueDate('');
  };

  const openCalendar = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  return (
    <div className="container">
      <h1 className="title">📝 Todo List 📝</h1>

      <div className="task-input">
        <div className="input-container">
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <div className="date-time-wrapper">
            <FaCalendarAlt className="date-time-icon" onClick={openCalendar} />
            <input
              type="datetime-local"
              className="date-time-input"
              ref={dateInputRef}
              value={newDueDate}
              onChange={(e) => setNewDueDate(e.target.value)}
            />
          </div>
          <button onClick={addTask} className="add-task-button">Add</button>
        </div>
      </div>

      <div className="task-list">
        {tasks
          .sort((a, b) => a.completed - b.completed)
          .map((task) => (
            <div
              key={task.id}
              className={`task ${task.completed ? 'completed' : ''} ${deletingTaskId === task.id ? 'fade-out' : 'fade-in'}`}
            >
              {editingTaskId === task.id ? (
                <div className="edit-task">
                  <input
                    type="text"
                    value={editingTaskValue}
                    onChange={(e) => setEditingTaskValue(e.target.value)}
                  />
                  <input
                    type="datetime-local"
                    value={editingDueDate}
                    onChange={(e) => setEditingDueDate(e.target.value)}
                  />
                  <button onClick={saveEditingTask}>Save</button>
                </div>
              ) : (
                <div className="task-content">
                  <div className="task-text-container">
                    <span className="task-text">{task.text}</span>
                    {task.dueDate && (
                      <span className="task-due-date">
                        Due: {new Date(task.dueDate).toLocaleString()}
                      </span>
                    )}
                  </div>
                  <div className="task-actions">
                    <button onClick={() => toggleCompleteTask(task.id)}>
                      <FaCheck className={`icon ${task.completed ? 'completed-icon' : ''}`} />
                    </button>
                    <button onClick={() => startEditingTask(task.id, task.text, task.dueDate)}>
                      <FaEdit className="icon edit-icon" />
                    </button>
                    <button onClick={() => deleteTask(task.id)}>
                      <FaTimes className="icon delete-icon" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoApp;
