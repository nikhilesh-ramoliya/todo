import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsEnum(['To Do', 'In Progress', 'Done'])
  status: string;
}
