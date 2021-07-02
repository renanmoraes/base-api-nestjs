import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { GroupController } from './group/group.controller';
import { PermissionController } from './permission/permission.controller';
import { PermissionModule } from './permission/permission.module';
import { GroupModule } from './group/group.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost:27017/mdrsistemas`, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }),
    UserModule,
    PermissionModule,
    GroupModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
