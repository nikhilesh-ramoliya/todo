
import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/screens/CreateTodo";
import { useGetTodos } from "./components/screens/hooks/useGetTodos";
import { TodoList } from "./components/screens/Todos";
import FilterTodos from "./components/screens/FilterTodos";

function App() {
  const { data: todos } = useGetTodos();
  const [value, setValue] = useState("All");


  return (
    <div className="h-screen w-screen bg-base-100">

    <div className="h-screen max-w-lg m-auto w-full p-2 flex flex-col">
      <div>
        <h1 className="text-3xl font-bold py-5">Todo App</h1>
      </div>
      <div className="flex gap-2">
        <CreateTodo />
        <FilterTodos value={value} onChange={setValue} />
      </div>

      {todos && (
        <TodoList
          todos={todos.filter(
            (todo) => todo.status === value || value === "All"
          )}
        />
      )}
    </div>
    </div>
  );
}

export default App;
