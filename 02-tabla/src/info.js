export const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "Nombre", uid: "nombre", sortable: true},
  {name: "Apellido", uid: "apellido", sortable: true},
  {name: "Experiencia Laboral", uid: "experiencia", sortable: true},
  {name: "Correo Empresarial", uid: "email"},
  {name: "Estado", uid: "estado"},
  {name: "Fecha de Ingreso", uid: "date", sortable: true},
  {name: "Seniority", uid: "seniority"},
];

export const statusOptions = [
  {name: "Activo", uid: "active"},
  {name: "Inactivo", uid: "inactive"},
];

export const users = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez",
    experiencia: 5,
    email: "juan.perez@empresa.com",
    estado: "Activo",
    date: "2020-06-15",
    seniority: "Semi Senior"
  },
  {
    id: 2,
    nombre: "María",
    apellido: "Gómez",
    experiencia: 8,
    email: "maria.gomez@empresa.com",
    estado: "Activo",
    date: "2018-03-22",
    seniority: "Senior"
  },
  {
    id: 3,
    nombre: "Carlos",
    apellido: "Ramírez",
    experiencia: 3,
    email: "carlos.ramirez@empresa.com",
    estado: "Inactivo",
    date: "2021-09-10",
    seniority: "Junior"
  },
  {
    id: 4,
    nombre: "Ana",
    apellido: "López",
    experiencia: 10,
    email: "ana.lopez@empresa.com",
    estado: "Activo",
    date: "2015-01-30",
    seniority: "Senior"
  },
  {
    id: 5,
    nombre: "Pedro",
    apellido: "Sánchez",
    experiencia: 6,
    email: "pedro.sanchez@empresa.com",
    estado: "Activo",
    date: "2019-07-18",
    seniority: "Semi Senior"
  }
];