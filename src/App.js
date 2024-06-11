// src/App.js
import React, { useState } from 'react';
import Pagination from './Components/Pagination';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example: Total number of pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <h1>Pagination Example</h1>
      {/* Other content here */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
