import { ApiProperty } from '@nestjs/swagger';

export class BannedUserDto {
  @ApiProperty({ example: 1, description: 'User id' })
  readonly userId: number;

  @ApiProperty({ example: true, description: 'Is banned' })
  readonly banned: boolean;

  @ApiProperty({ example: 'banned for spam', description: 'Banned reason' })
  readonly banReason: string;
}
