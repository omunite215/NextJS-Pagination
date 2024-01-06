"use client";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

const filters: { label: string; value?: string }[] = [
  {
    label: "All",
  },
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Employed",
    value: "employed",
  },
  {
    label: "Domain",
    value: "domain"
  }
];

const ProfileFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Select
      defaultValue={searchParams.get("filterBy") || ""}
      onValueChange={(filterBy : string) => {
        const params = new URLSearchParams();
        if(filterBy) params.append("filterBy", filterBy);
        const query = params.size ? "?" + params.toString() : "";
        router.push(`${query}`);
      }}
    >
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Filter by..." />
      </SelectTrigger>
      <SelectContent>
        {filters.map((filter) => (
          <SelectItem key={filter.value ?? "All"} value={filter.value ?? "All"}>
            {filter.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ProfileFilter;
