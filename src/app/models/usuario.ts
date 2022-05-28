export interface usuario {
    id: string | undefined,
    imagenPerfil: string | null,
    nombre: string,
    descripcion: string,
    password: string,
    email: string,
    edad: number
}