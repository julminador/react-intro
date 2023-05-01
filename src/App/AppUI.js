import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
  } = React.useContext(TodoContext);

  return (
    <> {/* Se usa "<> </>" o "<React.Fragment> </React.Fragment>" para envolver etiquetas */}
      <TodoCounter />
      <TodoSearch />

      <TodoList>
      {error && <p>Desespérate, hubo un error</p>}
      {loading && <p>Estamos cargando, no desesperes...</p>}
      {(!loading && !searchedTodos.length) && <p>Crea tu primer ToDo</p>}

      {searchedTodos.map(todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>

      <CreateTodoButton />
    </>
  );
}

export { AppUI }