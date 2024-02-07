// Pagination.tsx
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center mt-8">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-dark-purple text-white' : 'bg-white'}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
