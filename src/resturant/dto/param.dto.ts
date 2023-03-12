import { IsNotEmpty, IsUUID } from "class-validator";

export class ParamDto{

    @IsNotEmpty()
    @IsUUID()
    id : string;
}