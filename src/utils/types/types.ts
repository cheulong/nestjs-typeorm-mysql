import { Exclude } from 'class-transformer';

export type CreateUserParams = {
  username: string;
  password: string;
};

export type UpdateUserParams = {
  username: string;
  password: string;
};

export type CreateUserProfileParams = {
  firstName: string;
  lastName: string;
  age: number;
  dob: string;
};

export type CreateUserPostParams = {
  title: string;
  description: string;
};

export class SerializedUser {
  @Exclude()
  password: string;
}
