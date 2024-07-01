import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'New Post', description: 'Post title' })
  readonly title: string;

  @ApiProperty({
    example: 'Content of new post',
    description: 'Post content',
  })
  readonly content: string;

  @ApiProperty({
    example: 'https://example.com/image.png',
    description: 'Post image src',
  })
  readonly imageSrc: string;
}
