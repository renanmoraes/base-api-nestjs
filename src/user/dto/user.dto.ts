import { IsEmail, IsIn, IsNotEmpty } from 'class-validator'
import { UserTypeArray } from 'src/@constants/user.constant';
export class UserDTO {
    @IsNotEmpty()
    readonly name: string;

    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;
    readonly groups: Array<string>;
    readonly idCompany: string;
    readonly sign: string;

    @IsNotEmpty()
    @IsIn(UserTypeArray)
    readonly type: UserType;
}