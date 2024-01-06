import { Badge } from "./ui/badge";

const EmploymentStatus = ({ status }: { status: boolean }) => {
  return (
    <Badge variant={status ? "default" : "destructive"}>
      {status ? "Employed" : "UnEmployed"}
    </Badge>
  );
};

export default EmploymentStatus;
