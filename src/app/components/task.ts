export interface Task {
    titulo: String;
    descripcion: String;
    completada: Boolean;
    prioridad: 'baja' | 'media' | 'alta';
}