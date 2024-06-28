import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/user.model';

interface IPostCreationAttributes {
  title: string;
  description: string;
  imageSrc: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, IPostCreationAttributes> {
  @ApiProperty({
    example: '1',
    description: 'Unique identifier',
    uniqueItems: true,
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Post title',
    description: 'Title of post',
    uniqueItems: true,
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @ApiProperty({ example: 'Post content', description: 'Content of post' })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({ example: 'Image src', description: 'Image src' })
  @Column({ type: DataType.STRING })
  imageSrc: string;

  @BelongsTo(() => User)
  author: User;

  @ForeignKey(() => User)
  @Column({
    type: DataType.NUMBER,
  })
  userId: number;
}
