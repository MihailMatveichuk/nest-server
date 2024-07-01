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
  content: string;
  imageSrc: string;
  userId: number;
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
    example: 'New post',
    description: 'Post title',
    uniqueItems: true,
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @ApiProperty({
    example: 'New post',
    description: 'Post content',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({
    example: '9f079fb3-e969-410b-8602-94887ef3576f.jpg',
    description: 'Post image src',
  })
  @Column({ type: DataType.STRING })
  imageSrc: string;

  @BelongsTo(() => User)
  author: User;

  @ForeignKey(() => User)
  @Column({ type: DataType.NUMBER })
  userId: number;
}
