import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PermissionDTO } from './dto/permission.dto';
import { Permission } from './entities/permission.interface';

@Injectable()
export class PermissionService {
    constructor(@InjectModel('Permission') private readonly permissionModel: Model<Permission>) { }

    async createPermission(permission: PermissionDTO): Promise<Permission> {
        const permissionCreated = new this.permissionModel(permission);
        return await permissionCreated.save();
    }

    async updatePermission(_id: string, permission: PermissionDTO): Promise<Permission> {
        return await this.permissionModel.findOneAndUpdate({ _id }, { $set: permission }).exec()
    }

    async getAllPermission(): Promise<Permission[]> {
        return await this.permissionModel.find()
            .populate('idCompany')
            .exec();
    }

    async getPermissionById(_id: string): Promise<Permission> {
        const permission = await this.permissionModel.findById(_id)
            .populate('idCompany')
            .exec();
        if (!permission) {
            throw new NotFoundException(`Permissão com identificador ${_id} não encontrado`)
        }

        return permission
    }

    async deletePermission(_id: string): Promise<any> {
        const permission = await this.permissionModel.findOneAndDelete({ _id }).exec();
        if (!permission) {
            throw new NotFoundException(`Permissão com identificador ${_id} não encontrado`)
        }

        return permission;
    }
}
