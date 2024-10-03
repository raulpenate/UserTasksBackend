import { IsBoolean, IsString, IsUUID, MinLength } from "class-validator";

export class CreateTaskDto {
    @IsString()
    @MinLength(2)
    title: string;

    @IsString()
    @MinLength(2)
    description: string;

    @IsBoolean()
    completed: boolean;

    @IsUUID()
    userId: string;
  }