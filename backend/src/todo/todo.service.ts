import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  create(createTodoDto: CreateTodoDto) {
    const todo = new this.todoModel(createTodoDto);
    return todo.save();
  }

  findAll() {
    return this.todoModel.find();
  }

  findOne(id: string) {
    return this.todoModel.findById(id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoModel.findByIdAndUpdate(id, updateTodoDto);
  }

  remove(id: string) {
    return this.todoModel.findByIdAndDelete(id);
  }
}
