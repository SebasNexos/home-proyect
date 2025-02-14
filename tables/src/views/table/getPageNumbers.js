  
  
const totalPages = table.getPageCount();
const currentPage = table.getState().pagination.pageIndex;
const visiblePages = 5; // Número de botones de página a mostrar


export const getPageNumbers = () => {
    const pages = [];
    
    if (totalPages <= visiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }
  
    if (currentPage < 2) {
      pages.push(0, 1, 2, '...', totalPages - 1);
    } else if (currentPage > totalPages - 3) {
      pages.push(0, '...', totalPages - 3, totalPages - 2, totalPages - 1);
    } else {
      pages.push(0, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages - 1);
    }
  
    return pages;
};