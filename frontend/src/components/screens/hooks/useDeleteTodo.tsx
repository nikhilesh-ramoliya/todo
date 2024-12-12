import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteTodo = async (id: string) => {
  const response = await fetch(import.meta.env.VITE_API_URL+`/todo/${id}`, {
    method: "DELETE",
  });

  return response.json();
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
