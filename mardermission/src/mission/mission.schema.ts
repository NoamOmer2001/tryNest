import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  user_is: string;

  @Prop()
  telephone_number: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
