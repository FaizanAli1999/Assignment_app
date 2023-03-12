import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(data: any) {
    return await this.userRepository.save(data);
  }

  async findAll() {
    const found = await this.userRepository.find();
    if (found.length) return found;
    throw new NotFoundException('No user found');
  }

  async findOne(data:any) {
    const found = await this.userRepository.findOne({where:{id:data.id}})
    if(!!found)
    return found;
    throw new NotFoundException('No user found against the id');
  }

  async update(userId: any, data :any) {
    const found = await this.userRepository.findOne({where:{id:userId.id}})
    if(!!found){
      return await this.userRepository.update({id:userId.id},data)
    }
    throw new  NotFoundException('No user found against the id')

  }

 async remove(userId:any) {
    const found = await this.userRepository.findOne({where:{id:userId.id}})
    if(!!found)
    return await this.userRepository.delete(userId.id)
    throw new  NotFoundException('No user found against the id')
  }
}
