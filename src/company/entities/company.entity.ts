import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {  
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    city: number;

    @Column()
    plan_type: string;

    @Column()
    status: string;

    @Column()
    creation_date: Date;
}


