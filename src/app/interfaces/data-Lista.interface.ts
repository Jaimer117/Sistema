export interface DataListaDiaria{
    data: ListaDiaria[]
}

export interface ListaDiaria{
    id: Number,
    proyecto: String,
    actividad: String,
    fechaInicio: String,
    fechaFin: String,
    tiempoestimado: String,
    duracion: String,
    empleado: String,
    supervisor: String,
    estado: String
}  

