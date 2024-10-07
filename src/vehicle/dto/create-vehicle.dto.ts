import { ApiProperty } from '@nestjs/swagger';

export class CreateVehicleDto {
    @ApiProperty({ example: 1 })
    driver_id: number;
    @ApiProperty({ example: 'ABC123' })
    plate: string;
    @ApiProperty({ example: 'Toyota' })
    model: string;
    @ApiProperty({ example: 'Truck' })
    type: string;
    @ApiProperty({ example: 1000 })
    capacity: number;
    @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
    creation_date: Date;
}
