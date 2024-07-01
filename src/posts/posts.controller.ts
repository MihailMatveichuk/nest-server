import {
  Body,
  Controller,
  UploadedFile,
  UseInterceptors,
  Post,
} from '@nestjs/common';
import { CreatePostDto } from './dto/post-create.dto';
import { PostsService } from './posts.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Post as PostModel } from './posts.model';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @ApiOperation({ summary: 'Create new post' })
  @ApiResponse({ status: 201, type: PostModel })
  @Post()
  @UseInterceptors(FileInterceptor('imageSrc'))
  createPost(@Body() dto: CreatePostDto, @UploadedFile() imageSrc) {
    return this.postsService.createPost(dto, imageSrc);
  }
}
