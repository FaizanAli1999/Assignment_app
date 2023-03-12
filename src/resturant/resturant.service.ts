import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateResturantDto } from './dto/create-resturant.dto';
import { UpdateResturantDto } from './dto/update-resturant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResturantEntity } from './entities/resturant.entity';
import { ReviewEntity } from './entities/reviews.entity';

@Injectable()
export class ResturantService {
  constructor(
    @InjectRepository(ResturantEntity)
    private resturantRepository: Repository<ResturantEntity>,
    @InjectRepository(ReviewEntity)
    private reviewRepository: Repository<ReviewEntity>,
  ) {}

  async create(data: any) {
    return await this.resturantRepository.save(data);
  }

  async createReview(data: any) {
    return await this.reviewRepository.save(data);
  }

  async findAll() {
    const found = await this.resturantRepository.find();
    if (found.length) return found;
    throw new NotFoundException('No Resturants found');
  }

  async findOne(data:any) {
    const found = await this.resturantRepository.findOne({where:{id:data.id},relations:['review']})
    if(!!found)
    return found;
    throw new NotFoundException('No Resturant found against the id');
  }

  async update(resturantId: any, data :any) {
    const found = await this.resturantRepository.findOne({where:{id:resturantId.id}})
    if(!!found){
      return await this.resturantRepository.update({id:resturantId.id},data)
    }
    throw new  NotFoundException('No resturant found against the id')

  }

 async remove(resturantId:any) {
    const found = await this.resturantRepository.findOne({where:{id:resturantId.id}})
    if(!!found)
    return await this.resturantRepository.delete(resturantId.id)
    throw new  NotFoundException('No resturant found against the id')
  }

}
