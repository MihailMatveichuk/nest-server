import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Length } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'Must be a string' })
  @Length(4, 16, { message: 'Role name must be from 4 to 16 characters' })
  @ApiProperty({ example: 'USER', description: 'Role name' })
  readonly name: string;

  @IsNumber({}, { message: 'Must be a number' })
  @ApiProperty({ example: 1, description: 'User id' })
  readonly userId: number;
}
