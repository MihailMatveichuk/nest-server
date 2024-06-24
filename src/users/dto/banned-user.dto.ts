import { ApiProperty } from '@nestjs/swagger';

export class BannedUserDto {
  @ApiProperty({ example: 'banned for spam', description: 'Banned reason' })
  readonly banReason: string;

  @ApiProperty({ example: true, description: 'Is banned' })
  readonly banned: boolean;

  @ApiProperty({ example: 1, description: 'User id' })
  readonly userId: number;
}
