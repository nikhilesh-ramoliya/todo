import { useQuery } from "@tanstack/react-query";
import { Todo } from "../types/todoType";

const getTodos = async () => {
  const response = await fetch(import.meta.env.VITE_API_URL+"/todo");

  return response.json();
};

export const useGetTodos = () => {
  return useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};
