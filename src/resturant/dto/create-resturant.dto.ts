import { IsNotEmpty } from "class-validator";

export class CreateResturantDto {

    @IsNotEmpty()
    name : string;

    @IsNotEmpty()
    address : string;

    @IsNotEmpty()
    description : string;
}
