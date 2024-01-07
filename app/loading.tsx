"use client";
import { Skeleton, SkeletonTheme } from "./components/Skeleton";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { columns } from "./components/ProfileTable";

const loading = () => {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <SkeletonTheme baseColor="#6d28d9" highlightColor="#8b5cf6">
      <div className="flex flex-col gap-3">
        <Skeleton width={250} height={36} />
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead key={column.label} className={column.className}>
                    {column.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {profiles.map((profile) => (
                <TableRow key={profile}>
                  <TableCell>
                    <Skeleton width={300} height={24} />
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Skeleton width={300} height={24} />
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Skeleton width={300} height={24} />
                  </TableCell>
                  <TableCell>
                    <Skeleton width={300} height={24} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-center items-center">
          <Skeleton width={350} height={40} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default loading;
