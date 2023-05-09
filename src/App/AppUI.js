import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosLoading } from "../TodosLoading";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <> {/* Se usa "<> </>" o "<React.Fragment> </React.Fragment>" para envolver etiquetas */}
      <TodoCounter />
      <TodoSearch />

      <TodoList>
      {error && <p>Desespérate, hubo un error</p>}
      {loading && <TodosLoading />}
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

      {openModal && (
      <Modal>
        <TodoForm />
      </Modal>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export { AppUI }