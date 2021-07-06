import { Permission } from "src/permission/interfaces/permission.interface";

export interface Group {
    readonly _id: string;
    readonly name: string;
    readonly description: string;
    readonly permissions: Array<String>
}