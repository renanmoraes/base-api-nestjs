import { IsEmail, IsIn, IsNotEmpty } from 'class-validator'
export class PermissionDTO {
    @IsNotEmpty()
    readonly name: string;

    readonly screen: string;
}