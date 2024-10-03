import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

// PartialType its like a more powerful Partial<Type> and it's amazing for this scenario where attributes/parameters aren't required
// It arguable that adds coupling, but in reality only removes boiler plate
export class UpdateUserDto extends PartialType(CreateUserDto) {}
