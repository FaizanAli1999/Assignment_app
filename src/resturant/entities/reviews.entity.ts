import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ResturantEntity } from "./resturant.entity";

@Entity('reviews')
export class ReviewEntity{

    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column()
    review : string;

    @Column({ name: 'resturant_id',type:'uuid' })
    resturantId: string;
  
    @ManyToOne(() => ResturantEntity, (resturantEntity) => resturantEntity.review, {
      onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'resturant_id'})
    resturant: string;
}