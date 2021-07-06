import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ValidateCompanyRequestPipe } from 'src/common/pipes/validate-company-request.pipe';
import { GroupDTO } from './dto/group.dto';
import { GroupService } from './group.service';
import { Group } from './entities/group.interface';

@Controller('api/v1/group')
export class GroupController {
    constructor(private readonly groupService: GroupService){}
    
    @Post()
    @UsePipes(ValidationPipe)
    async createGroup(@Body(ValidateCompanyRequestPipe) group: GroupDTO) {
        return await this.groupService.createGroup(group)
    }
    
    @Put(':_id')
    async updateGroup(@Param('_id') _id: string, @Body() group: GroupDTO) {
        return await this.groupService.updateGroup(_id, group)
    }
    
    @Get()
    async getAllGroup(): Promise<Group[]> {
        return await this.groupService.getAllGroup()
    }
    
    @Get(':_id')
    async getGroupById(@Param('_id') _id: string): Promise<Group> {
        return await this.groupService.getGroupById(_id)
    }
    
    @Delete(':_id')
    async deleteGroup(@Param('_id') _id: string): Promise<any> {
        return await this.groupService.deleteGroup(_id);
    }
}
