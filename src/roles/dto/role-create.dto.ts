import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Role name' })
  readonly name: string;

  @ApiProperty({
    example: 'Administrator has all rights',
    description: 'Role description',
  })
  readonly description: string;
}
