import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader, Plus } from "lucide-react";
import { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { TodoSelector } from "../ui/todoStatusSelector";
import { useCreateTodo } from "./hooks/useCreateTodo";
import { Todo } from "./types/todoType";

export function CreateTodo() {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      status: "To Do",
    },
  });

  const { mutate, isPending: isLoading } = useCreateTodo();

  const handleSubmit = (data: Partial<Todo>) => {
    mutate(data, {
      onSuccess: () => {
        handleClose();
      },
    });
  };

  const handleClose = () => {
    form.reset();
    setOpen(false);
  };

  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="w-max h-[30px] mb-2
          "
          size={'sm'}
          onClick={() => setOpen(true)}
        >
          <Plus /> Create todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <DialogHeader>
              <DialogTitle>Create Todo</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title" className="w-max">
                  Title
                </Label>
                <Controller
                  name="title"
                  control={form.control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      disabled={isLoading}
                      id="title"
                      type="title"
                      placeholder="Something to do"
                      required
                    />
                  )}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="description" className="w-max">
                    Description
                  </Label>
                </div>
                <Controller
                  name="description"
                  control={form.control}
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      disabled={isLoading}
                      id="description"
                      placeholder="Details"
                      required
                    />
                  )}
                />
              </div>
            </div>
            <div className="grid gap-2 pb-2">
              <div className="flex items-center ">
                <Label htmlFor="status" className="w-max">
                  Status
                </Label>
              </div>
              <div className="flex gap-2">
                <TodoSelector
                  value={form.watch("status") || "To Do"}
                  onChange={() => {
                    form.setValue("status", "To Do");
                  }}
                  disabled={isLoading}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader className="animate-spin" size="sm" />}
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
