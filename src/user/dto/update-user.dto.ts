import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// PartialType its like a more powerful Partial<Type> and it's amazing for this scenario where attributes/parameters aren't required
export class UpdateUserDto extends PartialType(CreateUserDto) {}
