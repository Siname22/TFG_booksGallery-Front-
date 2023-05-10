import { UsersModel } from "./users.model";

export interface ListModel {
    id: number | string;
    nombre: string;
    user: UsersModel
}