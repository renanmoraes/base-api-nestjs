import { Document } from "mongoose";

export class Company extends Document {
    readonly name: string;
    readonly contract: string;
    readonly status: string;
}