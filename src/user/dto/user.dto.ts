export class UserDTO {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly groups: Array<string>;
    readonly idCompany: string;
    readonly sign: string;
    readonly type: UserType;
}