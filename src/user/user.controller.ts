import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ValidateCompanyRequestPipe } from 'src/@pipes/validate-company-request.pipe';
import { UserDTO } from './dto/user.dto';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('api/v1/user')
export class UserController {
    
    constructor(private readonly userService: UserService){}
    
    @Post()
    @UsePipes(ValidationPipe)
    async createUser(@Body(ValidateCompanyRequestPipe) user: UserDTO) {
        return await this.userService.createUser(user)
    }
    
    @Put(':_id')
    async updateUser(@Param('_id') _id: string, @Body() user: UserDTO) {
        return await this.userService.updateUser(_id, user)
    }
    
    @Get()
    async getAllUser(): Promise<User | User[]> {
        return await this.userService.getAllUser()
    }
    
    @Get(':_id')
    async getUser(@Param('_id') _id: string): Promise<User | User[]> {
        return await this.userService.getUser(_id)
    }
    
    @Delete(':_id')
    async deleteUser(@Param('_id') _id: string): Promise<any> {
        return await this.userService.deleteUser(_id);
    }
    
}
