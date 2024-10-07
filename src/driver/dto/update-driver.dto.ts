import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDriverDto } from './create-driver.dto';

export class UpdateDriverDto extends PartialType(CreateDriverDto) {
    @ApiProperty({
        description: 'Nome do motorista',
        example: 'João da Silva',
    })
    first_name: string;

    @ApiProperty({
        description: 'Sobrenome do motorista',
        example: 'Silva',
    })
    last_name: string;

    @ApiProperty({
        description: 'Email do motorista',
        example: 'joao.silva@example.com',
    })
    email: string;

    @ApiProperty({
        description: 'Telefone do motorista',
        example: '(11) 99999-9999',
    })
    phone: string;

    @ApiProperty({
        description: 'Avatar do motorista',
        example: 'https://www.example.com/avatar.jpg',
    })
    avatar: string; 

    @ApiProperty({
        description: 'ID da empresa',
        example: 1,
    })
    company_id: number;
    
    @ApiProperty({
        description: 'Status do motorista',
        example: 'active',
    })
    status: string;
}
