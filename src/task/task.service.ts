import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  // Using repository pattern
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    try {
      const task = this.taskRepository.create({ ...createTaskDto, user: { id: createTaskDto.userId } });
      await this.taskRepository.save(task);

      return task;
    } catch (error) {
      throw new InternalServerErrorException(`Task wasn't created`);
    }
  }

  async findAll() {
    try {
      return await this.taskRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(`Could not retrieve tasks`);
    }
  }

  async findAllByUser(userId: string) {
    try {
      return await this.taskRepository.find({ where: { user: { id: userId } } });
    } catch (error) {
      throw new InternalServerErrorException(`Could not retrieve tasks for user with id ${userId}`);
    }
  }

  async findOne(id: string) {
    try {
      return await this.taskRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(`Task with id ${id} not found`);
    }
  }

  async updateStatus(id: string, updateTaskDto: UpdateTaskDto) {
    try {
      await this.taskRepository.update(id, { completed: updateTaskDto.completed });
      return await this.findOne(id);
    } catch (error) {
      throw new InternalServerErrorException(`Task with id ${id} could not be updated`);
    }
  }

  async remove(id: string) {
    try {
      const task = await this.findOne(id);
      await this.taskRepository.remove(task);
      return { deleted: true };
    } catch (error) {
      throw new InternalServerErrorException(`Task with id ${id} could not be removed`);
    }
  }
}
