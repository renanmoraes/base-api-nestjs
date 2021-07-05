import { IsNotEmpty } from 'class-validator'
export class GroupDTO {
    @IsNotEmpty()
    readonly name: string;

    readonly description: string;

    readonly permissions: Array<String>
}