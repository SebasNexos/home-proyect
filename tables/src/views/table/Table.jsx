import React, { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { empleados } from './data';
import { columns } from './columns';

export const Table = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([...empleados]);
  const [originalData] = useState([...empleados]);
  const [editedRows, setEditedRows] = useState({});

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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={handleSearch}
        className="mb-4 p-2 border rounded w-full text-gray-700 focus:ring-2 focus:ring-orange-500"
      />
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-orange-500 text-white">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="p-3 text-left font-semibold">
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <tr
                key={row.id}
                className={`border-b ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'} hover:bg-orange-100`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-3 text-gray-700">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button 
          onClick={() => table.previousPage()} 
          disabled={!table.getCanPreviousPage()}
          className="p-2 border rounded bg-orange-500 text-white disabled:opacity-50 hover:bg-orange-600"
        >
          Anterior
        </button>
        <span className="text-gray-700">
          Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
        </span>
        <button 
          onClick={() => table.nextPage()} 
          disabled={!table.getCanNextPage()}
          className="p-2 border rounded bg-orange-500 text-white disabled:opacity-50 hover:bg-orange-600"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
