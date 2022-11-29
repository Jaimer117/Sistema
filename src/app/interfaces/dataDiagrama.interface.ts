
export let projectData:   Object [] = [

    {
        TaskID: 1,
        Nivel1: 'ESTACION 1',
        Nivel2: 'ACTIVIDADES',
        Nivel3: '',
        
        subtasks: [
            {  TaskID: 2, Nivel2: 'soldar',Nivel3:{},},
           
        ]       
    },
    {
        TaskID: 5,
        Nivel1: 'ESTACION 2',
        Nivel2: 'ACTIVIDADES',
        Nivel3: '',
  
     
        subtasks: [
            { TaskID: 6, Nivel2: 'verificar',Nivel3: {}, Duracion: '', Progreso: 5 }, 
            { TaskID: 7, Nivel2: 'limpiar',Nivel3: {},  Duracion: '', Progreso: 30 },
            { TaskID: 8, Nivel2: 'guardar', Nivel3: {}, Duracion: '', Progreso: 20 }
        ]
    },    
];















