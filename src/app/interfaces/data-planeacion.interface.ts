export interface DataPlaneacion {
    data: Planeacion[]
}

export interface Planeacion{
    id?: Number,
    plan?: String,
    proyecto?: String,
    fechaInicio?: String,
    fechaFin?: String,
    estado?: String,
   
}  
