import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        className={`${
          currentPage === 1 ? "opacity-25" : "opacity-75 hover:opacity-100"
        } flex h-10 w-10 items-center justify-center p-2`}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <BsChevronLeft />
      </button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          className={`${
            currentPage === index + 1
              ? "bg-neutral-600 text-white"
              : "bg-white text-neutral-800 hover:text-neutral-600"
          } h-10 w-10 rounded-full p-2`}
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
        >
          <span>{index + 1}</span>
        </button>
      ))}
      <button
        className={`${
          currentPage === totalPages
            ? "opacity-25"
            : "opacity-75 hover:opacity-100"
        } flex h-10 w-10 items-center justify-center rounded-full p-2`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
