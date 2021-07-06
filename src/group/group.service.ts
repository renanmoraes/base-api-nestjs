import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GroupDTO } from './dto/group.dto';
import { Group } from './entities/group.interface';

@Injectable()
export class GroupService {
    constructor(@InjectModel('Group') private readonly groupModel: Model<Group>) { }

    async createGroup(group: GroupDTO): Promise<Group> {
        const groupCreated = new this.groupModel(group);
        return await groupCreated.save();
    }

    async updateGroup(_id: string, group: GroupDTO): Promise<Group> {
        return await this.groupModel.findOneAndUpdate({ _id }, { $set: group }).exec()
    }

    async getAllGroup(): Promise<Group[]> {
        return await this.groupModel.find().exec();
    }

    async getGroupById(_id: string): Promise<Group> {
        const group = await this.groupModel.findById(_id).exec();
        if (!group) {
            throw new NotFoundException(`Permissão com identificador ${_id} não encontrado`)
        }

        return group
    }

    async deleteGroup(_id: string): Promise<any> {
        const group = await this.groupModel.findOneAndDelete({ _id }).exec();
        if (!group) {
            throw new NotFoundException(`Permissão com identificador ${_id} não encontrado`)
        }

        return group;
    }
}
