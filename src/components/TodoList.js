import React from "react";

const TodoList = ({ todos }) => {
  // Artificially slow down rendering to emulate complex computations
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms
  }

  return (
    <div>
      <p>
        Note: List is <strong>artificially slowed down!</strong>
      </p>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            Todo {todo.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
