
import React, { useState, useMemo } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const generateTasks = () => {
  const tasks = [];
  for (let i = 1; i <= 50; i++) {
    tasks.push({ id: i, completed: i % 2 !== 0 });
  }
  return tasks;
};

const filterTasks = (tasks, tab) => {
  if (tab === "active") return tasks.filter((task) => !task.completed);
  if (tab === "completed") return tasks.filter((task) => task.completed);
  return tasks;
};

const App = () => {
  const [tasks] = useState(generateTasks());
  const [tab, setTab] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  const filteredTasks = useMemo(() => filterTasks(tasks, tab), [tasks, tab]);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* Do not remove the main div */}
      <button onClick={() => setTab("all")}>All</button>
      <button onClick={() => setTab("active")}>Active</button>
      <button onClick={() => setTab("completed")}>Completed</button>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>
      <TodoList todos={filteredTasks} />
    </div>
  )
}

export default App
