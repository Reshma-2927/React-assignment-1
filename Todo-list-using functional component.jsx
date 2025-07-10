import React, { useState } from 'react';

function TodoFunc() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}

export default TodoFunc;
