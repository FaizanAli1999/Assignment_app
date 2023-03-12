import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ResturantEntity } from '../resturant/entities/resturant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {

  constructor( @InjectRepository(ResturantEntity)
  private resturantRepository: Repository<ResturantEntity>,){}

  async dashboard(){
    const found= await this.resturantRepository.createQueryBuilder('resturants').leftJoinAndSelect('resturants.review','review').loadRelationCountAndMap('resturants.reviewCount','resturants.review').getMany()
    return found;
  }
}
