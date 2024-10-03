import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [TypeOrmModule.forFeature([Task, User])],
})
export class TaskModule {}
