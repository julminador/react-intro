import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
// import './App.css';

const todos = [
  {  text: 'Tarea 1', completed: false },
  {  text: 'Tarea 2', completed: false },
  {  text: 'Tarea 3', completed: false },
];

function App() {
  return (
    <> {/* Se usa "<> </>" o "<React.Fragment> </React.Fragment>" para envolver etiquetas */}
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton />
      <button>+</button>
    </>
  );
}

export default App;
