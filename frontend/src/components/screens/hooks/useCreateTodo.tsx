import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../types/todoType";

const createTodo = async (data: Partial<Todo>) => {
  const response = await fetch(import.meta.env.VITE_API_URL+ "/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: data.title,
      description: data.description,
      status: data.status,
    }),
  });

  return response.json();
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
