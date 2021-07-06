import { Company } from "src/company/entities/company.interface";

export interface Permission extends Document {
    readonly _id: string;
    readonly name: string;
    readonly screen: string;
    readonly idCompany: Company
}