import { createColumnHelper } from "@tanstack/react-table";
import { TableCell } from '../components/TableCell';

const columnHelper = createColumnHelper()

export const columns = [

    columnHelper.accessor('colaborador', {
        header: 'Colaborador (es)',
        cell: TableCell, 
        meta: {
            type: 'string'
        }
    }),

    columnHelper.accessor('nombre', {
        header: 'Nombre',
        cell: TableCell, 
        meta: {
            type: 'string'
        }
    }),

    columnHelper.accessor('fechaInicio', {
        header: 'Fecha de inicio',
        cell: TableCell, 
        meta: {
            type: 'date'
        }
    }),

    columnHelper.accessor('fechaFinal', {
        header: 'Fecha final',
        cell: TableCell, 
        meta: {
            type: 'date'
        }
    }),

    columnHelper.accessor('estado', {
        header: 'Estado de proyecto',
        cell: TableCell, 
        meta: {
            type: 'string'
        }
    }),
    
    columnHelper.accessor('acciones', {
        header: 'Acciones',
        cell: TableCell,
        meta: {
            type: 'custom',
            actions: ['visualizar', 'detalles'] // Indica las acciones que tendrá la columna
        }
    })
]