import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, Put } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyDTO } from './dto/company.dto';
import { Company } from './entities/company.interface';

@Controller('api/v1/company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) { }

  @Post()
  @UsePipes(ValidationPipe)
  async createCompany(@Body() company: CompanyDTO) {
    return await this.companyService.createCompany(company)
  }

  @Put(':_id')
  async updateCompany(@Param('_id') _id: string, @Body() company: CompanyDTO) {
    return await this.companyService.updateCompany(_id, company)
  }

  @Get()
  async getAllCompany(): Promise<Company[]> {
    return await this.companyService.getAllCompany()
  }

  @Get(':_id')
  async getCompanyById(@Param('_id') _id: string): Promise<Company> {
    return await this.companyService.getCompanyById(_id)
  }

  @Delete(':_id')
  async deleteCompany(@Param('_id') _id: string): Promise<any> {
    return await this.companyService.deleteCompany(_id);
  }

}
