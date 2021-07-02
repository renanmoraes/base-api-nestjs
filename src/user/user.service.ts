import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { User } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';

@Injectable()
export class UserService {
    private readonly logger = new Logger(UserService.name)
    private users: User[] = [];

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async createUser(user: UserDTO): Promise<User> {
        const userCreated = new this.userModel(user);
        return await userCreated.save();
    }

    async updateUser(_id: string, user: UserDTO): Promise<User> {
        return await this.userModel.findOneAndUpdate({ _id }, { $set: user }).exec()
    }

    async getAllUser(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async getUser(_id: string): Promise<User> {
        const user = await this.userModel.findById(_id).exec();
        if (!user) {
            throw new NotFoundException(`Usuário com identificador ${_id} não encontrado`)
        }

        return user
    }

    async deleteUser(_id: string): Promise<any> {
        const user = await this.userModel.findOneAndDelete({ _id }).exec();
        if (!user) {
            throw new NotFoundException(`Usuário com identificador ${_id} não encontrado`)
        }

        return user;
    }
}
