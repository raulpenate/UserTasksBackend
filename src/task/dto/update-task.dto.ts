import { PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';

// PartialType its like a more powerful Partial<Type> and it's amazing for this scenario where attributes/parameters aren't required
// It arguable that adds coupling, but in reality only removes boiler plate
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
