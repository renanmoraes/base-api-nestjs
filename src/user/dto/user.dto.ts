import { IsArray, IsEmail, IsIn, IsNotEmpty, IsString } from 'class-validator'
import { UserTypeArray } from 'src/@constants/user.constant';
export class UserDTO {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;

    @IsArray()
    readonly groups: Array<string>;

    @IsString()
    readonly idCompany: string;

    @IsString()
    readonly sign: string;

    @IsNotEmpty()
    @IsIn(UserTypeArray)
    readonly type: UserType;
}