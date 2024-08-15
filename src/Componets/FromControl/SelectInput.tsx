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

export default function SelectInput() {
  return (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='All Groups' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Groups</SelectLabel>
          <SelectItem value='active'>Active</SelectItem>
          <SelectItem value='inactive'>inactive</SelectItem>
          <SelectItem value='pending'>pending</SelectItem>
          <SelectItem value='disabled'>disabled</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
