export interface DataSession {
    codigo:  number;
    mensaje: string;
    objeto:  Objeto[];
}

export interface Objeto {
    idrol:    number;
    clave:    string;
    nombre:   string;
    apaterno: string;
    amaterno: string;
    usuario:  string;
    status:   number;
    rol:      null;
    permisos: Permiso[];
    token:    string;
}

export interface Permiso {
    lectura:   number;
    escritura: number;
    otros:     number;
    permiso:   string;
    ruta:      string;
    icono:     string;
    status:    number;
    submenu:  Submenu[];
}

export interface Submenu {
    nombre:      string;
    url:         string;
    icono:         string;
    descripcion: string;
    lectura:     number;
    escritura:   number;
    otros:       number;
}
