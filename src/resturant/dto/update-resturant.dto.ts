import { PartialType } from '@nestjs/mapped-types';
import { CreateResturantDto } from './create-resturant.dto';

export class UpdateResturantDto extends PartialType(CreateResturantDto) {

    name?: string;

    address?: string;

    description?: string;
}
