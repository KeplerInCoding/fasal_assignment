// src/components/Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="flex justify-center mt-10">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="bg-gray-500 text-white p-2 mx-1 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span className="p-2 mx-1">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="bg-gray-500 text-white p-2 mx-1 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
