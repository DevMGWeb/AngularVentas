export interface ClienteCreacionDTO {
    nombre:string;
    apellido:string;
    fechaNacimiento: Date;
    nroDocumento:string;
    foto: File;
}

export interface ClienteDTO {
    nombre:string;
    apellido:string;
    fechaNacimiento: Date;
    nroDocumento:string;
    foto: string;
}