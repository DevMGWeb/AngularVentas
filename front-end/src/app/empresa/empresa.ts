export interface EmpresaCreacionDTO {
    nombre: string;
    nombreComercial: string;
    ruc: string;
    telefono: string;
    email: string;
    logo: File;
    latitud: number;
    longitud: number;
}

export interface EmpresaDTO {
    id: number;
    nombre:string;
    nombreComercial: string;
    ruc: string;
    telefono: string;
    email: string;
    logo: string;
    latitud: number;
    longitud: number;
}