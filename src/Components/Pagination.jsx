import { useState } from "react";

const Pagination = ({ totalPages, curPage, handlePageChange }) => {
    
    return (
      <div className="mt-8 pb-8 flex justify-center">
        <button
          onClick={() => handlePageChange(curPage - 1)}
          disabled={curPage === 1}
          className="bg-emerald-700 text-white p-2 rounded-l-md hover:bg-emerald-500"
        >
          Previous
        </button>
        <span className="bg-gray-300 p-2 border">{curPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(curPage + 1)}
          disabled={curPage === totalPages}
          className="bg-sky-900 text-white p-2 rounded-r-lg hover:bg-sky-500"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  