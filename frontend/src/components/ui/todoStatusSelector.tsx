import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// To Do', 'In Progress', 'Done'
export function TodoSelector({
  value,
  onChange,
  disabled,
  placeholder = "Status",
}: {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
}) {
  return (
    <Select onValueChange={onChange} value={value} disabled={disabled}>
      <SelectTrigger className="w-[120px] h-[30px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          <SelectItem defaultChecked value="To Do">
            To Do
          </SelectItem>
          <SelectItem value="In Progress">In Progress</SelectItem>
          <SelectItem value="Done">Done</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
