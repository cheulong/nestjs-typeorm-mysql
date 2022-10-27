import { MinLength } from 'class-validator';

export class CreateUserDto {
  username: string;

  @MinLength(4)
  password: string;
}
