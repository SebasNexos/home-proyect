import { createColumnHelper } from "@tanstack/react-table";
import { TableCell } from "./TableCell";
import { EditCell } from "./EditCell";
import { span } from "framer-motion/client";

const columnHelper = createColumnHelper()

export const columns = [

    columnHelper.accessor('id', {
        header: 'id',
        cell: TableCell, 
        meta: {
            type: 'number'
        }
    }),

    columnHelper.accessor('nombre', {
        header: 'Nombre',
        cell: TableCell, 
        meta: {
            type: 'string'
        }
    }),

    columnHelper.accessor('apellido', {
        header: 'Apellido',
        cell: TableCell, 
        meta: {
            type: 'string'
        }
    }),

    columnHelper.accessor('experienciaLaboral', {
        header: 'Experiencia Laboral',
        cell: TableCell, 
        meta: {
            type: 'number'
        }
    }),

    columnHelper.accessor('correoEmpresarial', {
        header: 'Correo Empresarial',
        cell: TableCell, 
        meta: {
            type: 'string'
        }
    }),
    
    columnHelper.accessor('estado', {
        header: 'Estado',
        cell: TableCell,
        meta: {
            type: 'string'
        }
    }),

    columnHelper.accessor('fechaIngreso', {
        header: 'Fecha Ingreso',
        cell: TableCell, 
        meta: {
            type: 'date'
        }
    }),
    
    columnHelper.accessor('seniority', {
        header: 'Seniority',
        cell: TableCell, 
        meta: {
            type: 'select'
        }
        // aqui van las diferentes opciones 
    }), 

    // configurarlo 
    //columnHelper.display({
    //    id: 'edit',
    //    cell: EditCell, 
    //})
]