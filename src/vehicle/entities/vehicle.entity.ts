import { Driver } from 'src/driver/entities/driver.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()   
    id: number;

    @ManyToOne(() => Driver, driver => driver.id)
    @JoinColumn({ name: 'driver_id' })
    driver: Driver;

    @Column()
    plate: string;

    @Column()
    model: string;

    @Column()
    type: string;

    @Column()       
    capacity: number;

    @Column()
    creation_date: Date;
}