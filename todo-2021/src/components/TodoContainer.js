import React from "react";
export function TodoContainer() {
  let state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };
  return (
    <ul>
    {state.todos.map(todo => (
      <li>{todo.title}</li>
    ))}
  </ul>
  );
}
