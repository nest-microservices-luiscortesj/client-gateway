import { IsEmail, IsNotEmpty, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(16)
  name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @MinLength(4)
  @MaxLength(16)
  @IsNotEmpty()
  @IsString()
  password: string;
}
