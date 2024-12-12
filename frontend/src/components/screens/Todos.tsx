import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { TodoSelector } from "../ui/todoStatusSelector";
import { useDeleteTodo } from "./hooks/useDeleteTodo";
import { useUpdateTodo } from "./hooks/useUpdateTodo";
import { Todo } from "./types/todoType";

export const TodoList = ({ todos }: { todos: Todo[] }) => {
  const { mutate: deleteTodo } = useDeleteTodo();
  const { mutate: updateTodo } = useUpdateTodo();

  return (
    <div className="w-full h-full border rounded-md p-2 overflow-scroll">
  
      <div className="flex flex-col gap-2">
        {todos?.map((todo) => (
          <div
            key={todo._id}
            className="border hover:bg-accent rounded-md px-2 flex justify-between gap-2 items-start py-2"
          >
            <div className="flex flex-col h-auto flex-1 max-w-[60%] break-words items-start justify-center">
              <div className="font-semibold text-left">
                {todo.title}
              </div>
              <div className="text-left flex-1">
                {todo.description}
              </div>
            </div>
            <div className="text-left">
              <TodoSelector
                value={todo.status}
                onChange={(val) =>
                  updateTodo({
                    data: {
                      status: val,
                    },
                    id: todo._id,
                  })
                }
              />
            </div>
            <div className="text-center">
              <Button
                size={'sm'}
                variant="destructive"
                className="w-max h-[30px]"
                onClick={() => {
                  deleteTodo(todo._id);
                }}
              >
                <Trash2 />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
