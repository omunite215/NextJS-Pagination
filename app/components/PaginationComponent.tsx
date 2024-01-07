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

  const displayPageCount = 3;
  const generatePaginationLinks = () => {
    const paginationLinks = [];
    const leftEllipsis = currentPage > 2;
    const rightEllipsis = currentPage < pageCount - 1;

    for (let i = 1; i <= pageCount; i++) {
      if (
        i === 1 ||
        i === pageCount ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        paginationLinks.push(
          <PaginationLink
            key={i}
            onClick={() => changePage(i)}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        );
      }
    }

    if (leftEllipsis) {
      paginationLinks.splice(1, 0, <PaginationEllipsis key="left" />);
    }
    if (rightEllipsis) {
      paginationLinks.splice(
        paginationLinks.length - 1,
        0,
        <PaginationEllipsis key="right" />
      );
    }

    return paginationLinks;
  };

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
        <Button
          variant="ghost"
          disabled={currentPage <= 1}
          onClick={() => changePage(currentPage - 1)}
          className="group"
        >
          <ChevronLeft className="group-hover:-translate-x-1 transition-all duration-300 delay-150" />{" "}
          Previous
        </Button>
        {generatePaginationLinks()}
        <Button
          variant="ghost"
          disabled={currentPage === pageCount}
          onClick={() => changePage(currentPage + 1)}
          className="group"
        >
          Next{" "}
          <ChevronRight className="group-hover:translate-x-1 transition-all duration-300 delay-150" />
        </Button>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
