import React, { useState } from 'react';
import { flexRender } from '@tanstack/react-table';
import { proyectos } from '../helpers/data'; 
import { columns } from '../helpers/columns';
import { useTable } from '../hooks/useTable';
import { ArchiveBoxArrowDownIcon, CheckBadgeIcon } from '@heroicons/react/16/solid';

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

  const [selectedRow, setSelectedRow] = useState(null); 

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
  <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
    <div className="relative w-full sm:w-64">
      <input
        type="text"
        placeholder="Buscar proyecto..."
        value={search}
        onChange={handleSearch}
        className="w-full px-4 py-2 border-2 border-[#ea6120] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#ea6120]"
      />
      <span className="absolute right-3 top-2.5 text-[#17232f]"></span>
    </div>
  </div>

  <div className="overflow-x-auto border-2 border-[#17232f] rounded-lg">
    <table className="w-full min-w-[600px]">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="bg-[#17232f] text-[#F8F9FA]">
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-b border-[#1c2a38]"
              >
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="bg-[#F8F9FA] divide-y divide-[#17232f]">
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="hover:bg-[#1c2a38]/10 transition-all duration-200">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="px-6 py-4 text-sm text-[#17232f] whitespace-nowrap">
                {cell.column.id === "estado" ? (
                  cell.getValue() === "Activo" ? (
                    <span className="px-3 py-1 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-700 shadow-sm">
                      <CheckBadgeIcon className='w-4 h-4 text-green-500 pr-0.5'/> Activo
                    </span>
                  ) : (
                    <span className="px-3 py-1 inline-flex text-xs font-semibold rounded-full bg-[#ea6120]/20 text-[#ea6120] shadow-sm">
                      <ArchiveBoxArrowDownIcon className='w-4 h-4 text-orange-500 pr-0.5'/> Finalizado 
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
      className="px-3 py-2 border border-[#ea6120] bg-[#ea6120]/5 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#ea6120]"
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
        className="px-4 py-2 border rounded-md text-sm transition-all duration-200 disabled:opacity-50 hover:bg-[#ea6120]/20 border-[#ea6120] text-[#17232f]"
      >
        Anterior
      </button>

      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && table.setPageIndex(page)}
          className={`px-4 py-2 border rounded-md text-sm transition-all duration-200 ${
            currentPage === page
              ? 'bg-[#17232f] text-[#F8F9FA] border-[#17232f]'
              : 'border-[#17232f]/30 hover:bg-[#17232f]/10 text-[#17232f]'
          }`}
          disabled={page === '...'}
        >
          {page === '...' ? '...' : page + 1}
        </button>
      ))}

      <button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        className="px-4 py-2 border rounded-md text-sm transition-all duration-200 disabled:opacity-50 hover:bg-[#ea6120]/20 border-[#ea6120] text-[#17232f]"
      >
        Siguiente
      </button>
    </div>
  </div>
</div>
  );
};
