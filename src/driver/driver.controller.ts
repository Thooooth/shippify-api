import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';


@ApiTags('Driver')
@Controller('driver')
@ApiSecurity('Authorization')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post()

  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.create(createDriverDto); 
  }

  @Get()

  findAll() {
    return this.driverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverService.findOne(+id);
  }

  @Get(':id/vehicles')

  findVehicles(@Param('id') id: string) {
    return this.driverService.findVehicles(+id);
  }

  @Patch(':id')

  update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driverService.update(+id, updateDriverDto);
  }

  @Delete(':id')

  remove(@Param('id') id: string) {
    return this.driverService.remove(+id);
  }
}
