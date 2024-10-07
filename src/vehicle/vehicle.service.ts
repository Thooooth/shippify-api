import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
  ) {}

  create(createVehicleDto: CreateVehicleDto) {
    return this.vehicleRepository.save(createVehicleDto);
  }

  findAll(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }

  findOne(id: number): Promise<Vehicle | null> {
    return this.vehicleRepository.findOneBy({ id });
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return this.vehicleRepository.update(id, updateVehicleDto);
  }

  async remove(id: number): Promise<void> {
    await this.vehicleRepository.delete(id);
  }
}
