import React from 'react'
import { getPageNumbers } from './getPageNumbers'


export const Paginacion = ({table, currentPage}) => {

  return (
    <>
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
    </>
  )
}

