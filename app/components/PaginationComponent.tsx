"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
} from "@/app/components/ui/pagination";
import { Button } from "./ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  itemCount: number;
  pageSize: number;
  currentPage: number;
};

const PaginationComponent = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };
  return (
    <Pagination>
      <PaginationContent className=" *:cursor-pointer">
        <Button variant="ghost" disabled={currentPage <= 1} onClick={() => changePage(currentPage - 1)} className="group">
          <ChevronLeft className="group-hover:-translate-x-1 transition-all duration-300 delay-150" />  Previous
        </Button>
        <PaginationLink
          onClick={() => changePage(1)}
          isActive={currentPage === 1}
        >
          1
        </PaginationLink>
        <PaginationLink
          onClick={() => changePage(2)}
          isActive={currentPage === 2}
        >
          2
        </PaginationLink>
        <PaginationLink
          onClick={() => changePage(3)}
          isActive={currentPage === 3}
        >
          3
        </PaginationLink>
        <PaginationEllipsis />
        <PaginationLink
          onClick={() => changePage(pageCount)}
          isActive={currentPage === pageCount}
        >
          {pageCount}
        </PaginationLink>
        <Button variant="ghost" disabled={currentPage === pageCount} onClick={() => changePage(currentPage + 1)} className="group">
          Next <ChevronRight className="group-hover:translate-x-1 transition-all duration-300 delay-150"/>
        </Button>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
