import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './entities/driver.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>, 
  ) {}

  create(createDriverDto: CreateDriverDto) {
    return this.driverRepository.save(createDriverDto);
  }

  findAll(): Promise<Driver[]> {
    return this.driverRepository.find();
  }

  findOne(id: number): Promise<Driver | null> {
    return this.driverRepository.findOneBy({ id });
  }

  findVehicles(id: number): Promise<Vehicle[]> {
    return this.driverRepository.findOne({ where: { id }, relations: ['vehicles'] }).then(driver => {
      return driver ? driver.vehicles : [];
    });
  }

  update(id: number, updateDriverDto: UpdateDriverDto) {
    return this.driverRepository.update(id, updateDriverDto);
  }

  async remove(id: number): Promise<void> {
    await this.driverRepository.delete(id);
  }
}
