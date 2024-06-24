import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from 'src/dto/user-create.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}
  async getAll() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async getOne(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    return user;
  }

  async create(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }
}
