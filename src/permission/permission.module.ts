import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PermissionSchema } from './entities/permission.schema';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Permission', schema: PermissionSchema }])],
    controllers: [PermissionController],
    providers: [PermissionService]
})
export class PermissionModule {}
