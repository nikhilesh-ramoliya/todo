import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ enum: ['To Do', 'In Progress', 'Done'], default: 'To Do' })
  status: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
