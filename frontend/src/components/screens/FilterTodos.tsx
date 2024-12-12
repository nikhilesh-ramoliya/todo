import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function FilterTodos({
  value,
  onChange,
}:{
  value: string,  
  onChange: (value: string) => void
}) {
  return (
    <Select onValueChange={onChange} value={value}>
    <SelectTrigger className="w-[120px] h-[30px]">
      <SelectValue placeholder="Filter by status" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Status</SelectLabel>
        <SelectItem defaultChecked value="All">
          All
        </SelectItem>
        <SelectItem defaultChecked value="To Do">
          To Do
        </SelectItem>
        <SelectItem value="In Progress">In Progress</SelectItem>
        <SelectItem value="Done">Done</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}

export default FilterTodos