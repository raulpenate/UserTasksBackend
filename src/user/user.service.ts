import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  // Using repository pattern
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const user = this.userRepository.create(createUserDto);
      return await this.userRepository.save(user);
    } catch (error) {
      throw new InternalServerErrorException(`User wasn't created`);
    }
  }

  async findAll(): Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(`Could not retrieve users`);
    }
  }

  async findOne(id: string): Promise<User> {
    try {
      return await this.userRepository.findOne({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(`User with id ${id} not found`);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      await this.userRepository.update(id, updateUserDto);
      return this.findOne(id);
    } catch (error) {
      throw new InternalServerErrorException(
        `User with id ${id} could not be updated`,
      );
    }
  }

  async remove(id: string): Promise<{ deleted: boolean }> {
    try {
      const user = await this.findOne(id);
      await this.userRepository.remove(user);
      return { deleted: true };
    } catch (error) {
      throw new InternalServerErrorException(`User with id ${id} could not be removed`);
    }
  }
}
