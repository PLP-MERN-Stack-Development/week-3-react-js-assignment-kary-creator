import { useState, useEffect } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleTask = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 border rounded px-2 py-1 mr-2"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between mb-2"
          >
            <span
              className={task.completed ? "line-through text-gray-500" : ""}
            >
              {task.text}
            </span>
            <div>
              <button
                onClick={() => toggleTask(index)}
                className="mr-2 px-2 py-1 bg-green-500 text-white rounded"
              >
                Toggle
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;