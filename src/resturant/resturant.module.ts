import { Module } from '@nestjs/common';
import { ResturantService } from './resturant.service';
import { ResturantController } from './resturant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResturantEntity } from './entities/resturant.entity';
import { ReviewEntity } from './entities/reviews.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResturantEntity,ReviewEntity])],
  controllers: [ResturantController],
  providers: [ResturantService]
})
export class ResturantModule {}
