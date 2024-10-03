import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { Task } from './entities/task.entity';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({
    status: 201,
    description: 'The task has been successfully created.',
  })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @ApiOkResponse({ type: Task })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'Return all tasks.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @ApiOkResponse({ type: Task })
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a task by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the task with the given ID.',
  })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @ApiOkResponse({ type: Task })
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Get('user/:id')
  @ApiOperation({ summary: 'Get a task by User ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the task with the given user ID.',
  })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @ApiOkResponse({ type: Task })
  findOneByUser(@Param('id') id: string) {
    return this.taskService.findAllByUser(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a task status by ID' })
  @ApiResponse({
    status: 200,
    description: 'The task status has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @ApiOkResponse({ type: Task })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.updateStatus(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task by ID' })
  @ApiResponse({
    status: 200,
    description: 'The task has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
