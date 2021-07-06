import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PermissionModule } from './permission/permission.module';
import { GroupModule } from './group/group.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost:27017/mdrsistemas`, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }),
    UserModule,
    PermissionModule,
    GroupModule,
    CompanyModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
