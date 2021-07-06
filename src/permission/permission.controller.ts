import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ValidateCompanyRequestPipe } from 'src/@pipes/validate-company-request.pipe';
import { PermissionDTO } from './dto/permission.dto';
import { Permission } from './interfaces/permission.interface';
import { PermissionService } from './permission.service';

@Controller('api/v1/permission')
export class PermissionController {

    constructor(private readonly permissionService: PermissionService){}
    
    @Post()
    @UsePipes(ValidationPipe)
    async createPermission(@Body(ValidateCompanyRequestPipe) permission: PermissionDTO) {
        return await this.permissionService.createPermission(permission)
    }
    
    @Put(':_id')
    async updatePermission(@Param('_id') _id: string, @Body() permission: PermissionDTO) {
        return await this.permissionService.updatePermission(_id, permission)
    }
    
    @Get()
    async getAllPermission(): Promise<Permission[]> {
        return await this.permissionService.getAllPermission()
    }
    
    @Get(':_id')
    async getPermissionById(@Param('_id') _id: string): Promise<Permission> {
        return await this.permissionService.getPermissionById(_id)
    }
    
    @Delete(':_id')
    async deletePermission(@Param('_id') _id: string): Promise<any> {
        return await this.permissionService.deletePermission(_id);
    }
    
}
