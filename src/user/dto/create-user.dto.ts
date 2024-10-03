import { IsInt, IsPositive, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(2)
    firstName: string;

    @IsString()
    @MinLength(2)
    lastName: string;

    @IsInt()
    @IsPositive()
    age: number;
}
