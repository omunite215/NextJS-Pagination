import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Profile } from "@prisma/client";
import EmploymentStatus from "./EmploymentStatus";

export type ProfileQuery = {
  filterBy: keyof Profile;
  page: string;
};

type Props = {
  profiles: Profile[];
};

export const columns: {
  label: string;
  className?: string;
}[] = [
  {
    label: "Name",
  },
  {
    label: "Email",
    className: "hidden md:table-cell",
  },
  {
    label: "Domain",
    className: "hidden md:table-cell",
  },
  {
    label: "Employment Status",
  },
];

const ProfileTable = ({ profiles }: Props) => {
  return (
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
          <TableRow key={profile.id}>
            <TableCell className="font-medium">{profile.name}</TableCell>
            <TableCell className="hidden md:table-cell">
              {profile.email}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {profile.domain}
            </TableCell>
            <TableCell>
              <EmploymentStatus status={profile.employed} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProfileTable;
