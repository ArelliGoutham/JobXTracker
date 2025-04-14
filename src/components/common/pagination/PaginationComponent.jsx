import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

// Main PaginationComponent that handles the pagination logic
const PaginationComponent = ({ paginationData, onPaginationChange }) => {
  const { currentPage, pageSize, totalItems, totalPages } = paginationData || {
    currentPage: 0,
    pageSize: 10,
    totalItems: 0,
    totalPages: 0,
  };

  // Adjust for 0-indexed backend pagination vs 1-indexed UI
  const displayPage = currentPage + 1;

  // Handle page change - emits both page and size
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === displayPage) return;

    // Convert to 0-indexed for backend and emit both values
    onPaginationChange({
      page: page - 1,
      size: pageSize,
    });
  };

  // Handle per page change - emits both page and size
  const handlePerPageChange = (e) => {
    const value = parseInt(e.target.value);

    // Reset to first page when changing page size
    onPaginationChange({
      page: 0,
      size: value,
    });
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Complex pagination with ellipsis
      if (displayPage <= 3) {
        // Near start: show 1 2 3 4 5 ... lastPage
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("ellipsis");
        pageNumbers.push(totalPages);
      } else if (displayPage >= totalPages - 2) {
        // Near end: show 1 ... lastPage-4 lastPage-3 lastPage-2 lastPage-1 lastPage
        pageNumbers.push(1);
        pageNumbers.push("ellipsis");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // Middle: show 1 ... currentPage-1 currentPage currentPage+1 ... lastPage
        pageNumbers.push(1);
        pageNumbers.push("ellipsis");
        for (let i = displayPage - 1; i <= displayPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("ellipsis");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  // Early return if no items
  if (totalItems <= 0) {
    return null;
  }

  const pageNumbers = getPageNumbers();

  const firstItemOnPage = Math.min(currentPage * pageSize + 1, totalItems);
  const lastItemOnPage = Math.min((currentPage + 1) * pageSize, totalItems);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full px-2 py-4">
      <div className="flex items-center">
        <label className="mr-2 text-gray-700 text-sm">Items per page:</label>
        <select
          value={pageSize}
          onChange={handlePerPageChange}
          className="border border-orange-300 rounded-md p-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={30}>30</option>
          <option value={90}>90</option>
        </select>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-1">
          {/* First page button */}
          <button
            onClick={() => handlePageChange(1)}
            disabled={displayPage === 1}
            className={`p-1 rounded-md ${
              displayPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-orange-600 hover:bg-orange-100"
            }`}
            aria-label="First Page"
          >
            <ChevronsLeft size={18} />
          </button>

          {/* Previous page button */}
          <button
            onClick={() => handlePageChange(displayPage - 1)}
            disabled={displayPage === 1}
            className={`p-1 rounded-md ${
              displayPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-orange-600 hover:bg-orange-100"
            }`}
            aria-label="Previous Page"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Page numbers */}
          <div className="flex items-center space-x-1 mx-1">
            {pageNumbers.map((pageNumber, index) =>
              pageNumber === "ellipsis" ? (
                <span key={`ellipsis-${index}`} className="px-2">
                  ...
                </span>
              ) : (
                <button
                  key={`page-${pageNumber}`}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`w-8 h-8 flex items-center justify-center rounded-md ${
                    displayPage === pageNumber
                      ? "bg-orange-500 text-white"
                      : "text-gray-700 hover:bg-orange-100"
                  }`}
                >
                  {pageNumber}
                </button>
              )
            )}
          </div>

          {/* Next page button */}
          <button
            onClick={() => handlePageChange(displayPage + 1)}
            disabled={displayPage === totalPages}
            className={`p-1 rounded-md ${
              displayPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-orange-600 hover:bg-orange-100"
            }`}
            aria-label="Next Page"
          >
            <ChevronRight size={18} />
          </button>

          {/* Last page button */}
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={displayPage === totalPages}
            className={`p-1 rounded-md ${
              displayPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-orange-600 hover:bg-orange-100"
            }`}
            aria-label="Last Page"
          >
            <ChevronsRight size={18} />
          </button>
        </div>
      </div>

      <div className="text-sm text-gray-600">
        Showing {firstItemOnPage} - {lastItemOnPage} of {totalItems} items
      </div>
    </div>
  );
};

export default PaginationComponent;
