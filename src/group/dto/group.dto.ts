import { IsArray, IsNotEmpty, IsString } from 'class-validator'
import { Permission } from 'src/permission/entities/permission.interface';
export class GroupDTO {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    
    @IsString()
    readonly description: string;

    @IsArray()
    readonly permissions: Array<Permission>
}