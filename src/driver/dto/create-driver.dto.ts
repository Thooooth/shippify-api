import { ApiProperty } from '@nestjs/swagger';

export class CreateDriverDto {
    @ApiProperty({ example: 1 })
    company_id: number;
    @ApiProperty({ example: 1 })
    city: number;
    @ApiProperty({ example: 'John' })
    first_name: string;
    @ApiProperty({ example: 'Doe' })
    last_name: string;
    @ApiProperty({ example: 'john.doe@example.com' })
    email: string;
    @ApiProperty({ example: '1234567890' })
    phone: string;
    @ApiProperty({ example: 'https://example.com/avatar.jpg' })
    avatar_url: string;
    @ApiProperty({ example: 'active' })
    status: string;
    @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
    creation_date: Date;
}
