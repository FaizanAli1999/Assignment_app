import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResturantEntity } from '../resturant/entities/resturant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResturantEntity])],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
