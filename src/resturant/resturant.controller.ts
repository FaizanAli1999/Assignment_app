import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResturantService } from './resturant.service';
import { CreateResturantDto } from './dto/create-resturant.dto';
import { UpdateResturantDto } from './dto/update-resturant.dto';
import { ParamDto } from './dto/param.dto';
import { ResturantReviewDto } from './dto/review.dto';

@Controller('resturant')
export class ResturantController {
  constructor(private readonly resturantService: ResturantService) {}

  @Post()
  create(@Body() data: CreateResturantDto) {
    return this.resturantService.create(data);
  }

  @Post('review')
  createReview(@Body() data: ResturantReviewDto) {
    return this.resturantService.createReview(data);
  }

  @Get()
  findAll() {
    return this.resturantService.findAll();
  }

  @Get(':id')
  findOne(@Param() data: ParamDto) {
    return this.resturantService.findOne(data);
  }

  @Patch(':id')
  update(@Param() resturantId: ParamDto, @Body() data: UpdateResturantDto) {
    return this.resturantService.update(resturantId, data);
  }

  @Delete(':id')
  remove(@Param() resturantId: ParamDto) {
    return this.resturantService.remove(resturantId);
  }
}
