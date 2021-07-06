import { Document } from "mongoose";
import { Permission } from "src/permission/entities/permission.interface";

export interface Group extends Document{
    readonly _id: string;
    readonly name: string;
    readonly description: string;
    readonly permissions: Array<Permission>
}