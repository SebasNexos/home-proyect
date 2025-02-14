import { useState, useEffect } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';

export const useTableLogic = (initialData, columns, initialPageSize = 5) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([...initialData]);
  const [originalData] = useState([...initialData]);
  const [pageSize, setPageSize] = useState(initialPageSize);

  // Función para manejar la búsqueda
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setData(
      originalData.filter((empleado) =>
        Object.values(empleado).some((field) =>
          String(field).toLowerCase().includes(value)
        )
      )
    );
  };

  // Configuración de la tabla con TanStack
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize
      },
    },
  });

  useEffect(() => {
    table.setPageSize(pageSize);
  }, [pageSize, table]);

  // Paginación optimizada
  const totalPages = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex;
  const visiblePages = 5;

  const getPageNumbers = () => {
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

  return {
    search,
    handleSearch,
    data,
    table,
    pageSize,
    setPageSize,
    totalPages,
    currentPage,
    getPageNumbers
  };
};
