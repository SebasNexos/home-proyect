import React from 'react';
import { flexRender } from '@tanstack/react-table';
import { proyectos } from '../helpers/data'; 
import { columns } from '../helpers/columns';
import { useTable } from '../hooks/useTable';

export const ProyectsPage = () => {
  
  const {
    search,
    handleSearch,
    data,
    table,
    pageSize,
    setPageSize,
    totalPages,
    currentPage,
    getPageNumbers
  } = useTable(proyectos, columns);



  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Buscar proyecto..."
            value={search}
            onChange={handleSearch}
            className="w-full px-4 py-2 border-2 border-orange-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <span className="absolute right-3 top-2.5 text-gray-700"></span>
        </div>
      </div>

      <div className="overflow-x-auto border-2 border-blue-500 rounded-lg">
        <table className="w-full min-w-[600px]">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-blue-500 text-white">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-b border-blue-300"
                  >
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-blue-500">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-blue-100 transition-all duration-200">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
                    {cell.column.id === "estado" ? (
                      cell.getValue() === "Activo" ? (
                        <span className="px-3 py-1 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-700 shadow-sm">
                          ✅ Activo
                        </span>
                      ) : (
                        <span className="px-3 py-1 inline-flex text-xs font-semibold rounded-full bg-orange-100 text-orange-700 shadow-sm">
                          Ø Finalizado
                        </span>
                      )
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4">
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="px-3 py-2 border border-orange-600 bg-orange-50 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          {[5, 10].map((size) => (
            <option key={size} value={size}>
              {size} registros por página
            </option>
          ))}
        </select>

        <div className="flex gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-4 py-2 border rounded-md text-sm transition-all duration-200 disabled:opacity-50 hover:bg-orange-200 border-orange-300"
          >
            Anterior
          </button>

          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === 'number' && table.setPageIndex(page)}
              className={`px-4 py-2 border rounded-md text-sm transition-all duration-200 ${
                currentPage === page
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'border-gray-300 hover:bg-gray-100'
              }`}
              disabled={page === '...'}
            >
              {page === '...' ? '...' : page + 1}
            </button>
          ))}

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-4 py-2 border rounded-md text-sm transition-all duration-200 disabled:opacity-50 hover:bg-orange-200 border-orange-300"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>

    
  );
};
