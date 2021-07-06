import { IsArray, IsNotEmpty, IsString } from 'class-validator'
export class GroupDTO {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    
    @IsString()
    readonly description: string;

    @IsArray()
    readonly permissions: Array<String>
}