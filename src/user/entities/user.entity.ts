import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column()
    firstName : string;

    @Column()
    lastName : string;

    @Column()
    email : string;
}

