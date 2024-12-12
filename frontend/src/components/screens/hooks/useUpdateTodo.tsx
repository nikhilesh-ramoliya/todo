import { useMutation } from "@tanstack/react-query";
import { Todo } from "../types/todoType";
import { useQueryClient } from "@tanstack/react-query";

const updateTodo = async (payload: {
  data: Partial<Todo>;
  id: string;
}): Promise<Todo> => {
  const response = await fetch(import.meta.env.VITE_API_URL +"/todo/" + payload.id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload.data),
  });

  return response.json();
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
