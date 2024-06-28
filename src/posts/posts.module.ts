import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { User } from 'src/users/user.model';
import { Post } from './posts.model';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [User, Post],
})
export class PostsModule {}
