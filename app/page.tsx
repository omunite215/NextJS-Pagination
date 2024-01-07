import prisma from "@/prisma/client";
import PaginationComponent from "./components/PaginationComponent";
import ProfileFilter from "./components/ProfileFilter";
import ProfileTable, { ProfileQuery } from "./components/ProfileTable";

export default async function Home({
  searchParams,
}: {
  searchParams: ProfileQuery;
}) {
  const paramsNames = ["name", "domain", "employed"];
  const filterBy = paramsNames.includes(searchParams.filterBy)
    ? { [searchParams.filterBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 8;

  const profiles = await prisma.profile.findMany({
    orderBy: filterBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const profileCount = await prisma.profile.count({ orderBy: filterBy });

  return (
    <section className="flex flex-col gap-3">
      <ProfileFilter />
      <ProfileTable profiles={profiles} />
      <PaginationComponent
        pageSize={pageSize}
        currentPage={page}
        itemCount={profileCount}
      />
    </section>
  );
}
