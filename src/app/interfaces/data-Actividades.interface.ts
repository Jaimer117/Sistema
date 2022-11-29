
export interface DataActividades{
    data: Actividades[]
}

export interface Actividades{
    id: Number,
    descripcion: String,
    tiempoestimado: String,
    fechainicio: String,
    fechafin: String,
    supervisor: String,
    estado: String,
}