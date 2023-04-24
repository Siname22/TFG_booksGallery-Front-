import { AutorModel } from "./autor.model";

export interface BooksModel {
    id: string | number;
    nombre: string;
    portada: string;
    saga: string;
    editorial: string,
    sinopsis: string;
    favoritos: boolean;
    autor?: AutorModel;
}