import { AutorModel } from "./autor.model";

export interface BooksModel {
    nameBook: string;
    saga: string;
    editorial: string;
    portrait: string;
    _id: string | number;
    autor?: AutorModel;
}