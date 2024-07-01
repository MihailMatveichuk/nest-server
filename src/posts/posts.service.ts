import { Injectable, Param } from '@nestjs/common';
import { CreatePostDto } from './dto/post-create.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private postRepository: typeof Post,
    private fileService: FilesService,
  ) {}
  async createPost(dto: CreatePostDto, imageSrc: string) {
    const fileName = await this.fileService.createFile(imageSrc);
    const post = await this.postRepository.create({
      ...dto,
      imageSrc: fileName,
    });

    return post;
  }
}
