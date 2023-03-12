import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ReviewEntity } from "./reviews.entity";

@Entity('resturants')
export class ResturantEntity {

    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column()
    name : string;

    @Column()
    address : string;

    @Column()
    description : string;

    @OneToMany(() => ReviewEntity, (reviewEntity) => reviewEntity.resturant, {
        "cascade": ["remove","insert"],
        })
      review : ReviewEntity;
}
