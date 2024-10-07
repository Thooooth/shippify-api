import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {
    @ApiProperty({ example: 'Shippify' })
    name: string;
    @ApiProperty({ example: 1 })
    city: number;
    @ApiProperty({ example: 'basic' })
    plan_type: string;
    @ApiProperty({ example: 'active' })
    status: string;
    @ApiProperty({ example: '2024-01-01' })
    creation_date: Date;
}
