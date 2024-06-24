import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: 'USER', description: 'Role name' })
  readonly name: string;

  @ApiProperty({ example: 1, description: 'User id' })
  readonly userId: number;
}
