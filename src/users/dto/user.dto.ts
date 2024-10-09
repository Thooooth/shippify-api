
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'admin' })
  username: string;

  @ApiProperty({ example: 'admin' })
  password: string;
}
