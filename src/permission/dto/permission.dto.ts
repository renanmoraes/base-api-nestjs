import { IsEmail, IsIn, IsNotEmpty, IsSemVer, IsString } from 'class-validator'
export class PermissionDTO {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    readonly screen: string;
}