import { Company } from 'src/company/entities/company.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Driver {
    @PrimaryGeneratedColumn() 
    id: number;

    @ManyToOne(() => Company, company => company.id, { nullable: true })    
    @JoinColumn({ name: 'company_id' })
    company: Company;

    @Column()
    city: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    avatar_url: string;

    @Column()
    status: string;

    @Column()
    creation_date: Date;

    @OneToMany(() => Vehicle, vehicle => vehicle.driver)
    vehicles: Vehicle[];
}
