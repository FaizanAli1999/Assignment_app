import { IsNotEmpty, IsUUID } from "class-validator";

export class ResturantReviewDto{

    @IsNotEmpty()
    review : string;

    @IsUUID()
    resturantId : string;
}