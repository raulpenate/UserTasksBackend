import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

// PartialType its like a more powerful Partial<Type> and it's amazing for this scenario where attributes/parameters aren't required
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
