import Navbar from "./components/Navbar";
import { Skeleton } from "./components/Skeleton";
import { Table, TableBody, TableHeader, TableRow } from "./components/ui/table";

const loading = () => {
  return (
    <div className="flex flex-col gap-3">
      <Navbar />
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <Skeleton />
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <Skeleton />
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div>
        <Skeleton className="w-[250px]" />
      </div>
    </div>
  );
};

export default loading;
