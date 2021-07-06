import { IsNotEmpty, IsString } from "class-validator";

export class CompanyDTO {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly contract: string;
}