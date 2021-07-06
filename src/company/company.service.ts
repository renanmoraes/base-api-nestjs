import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompanyDTO } from './dto/company.dto';
import { Company } from './entities/company.interface';

@Injectable()
export class CompanyService {
  constructor(@InjectModel('Company') private readonly companyModel: Model<Company>) { }

  async createCompany(company: CompanyDTO): Promise<Company> {
      const companyCreated = new this.companyModel(company);
      return await companyCreated.save();
  }

  async updateCompany(_id: string, company: CompanyDTO): Promise<Company> {
      return await this.companyModel.findOneAndUpdate({ _id }, { $set: company }).exec()
  }

  async getAllCompany(): Promise<Company[]> {
      return await this.companyModel.find().exec();
  }

  async getCompanyById(_id: string): Promise<Company> {
      const company = await this.companyModel.findById(_id).exec();
      if (!company) {
          throw new NotFoundException(`Empresa com identificador ${_id} não encontrado`)
      }

      return company
  }

  async deleteCompany(_id: string): Promise<any> {
      const company = await this.companyModel.findOneAndDelete({ _id }).exec();
      if (!company) {
          throw new NotFoundException(`Empresa com identificador ${_id} não encontrado`)
      }

      return company;
  }
}
