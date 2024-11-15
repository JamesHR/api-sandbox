import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User extends Document{
    @Prop({ required: true })
    firstName: string;
  
    @Prop({ required: true })
    lastName: string;
  
    @Prop({ required: false })
    motherLastName: string;
  
    @Prop({ required: true, unique: true })
    email: string;
  
    @Prop({ required: true })
    password: string;
  
    @Prop({ required: true })
    phone: string;
  
    @Prop({ required: true, enum: ['admin', 'default'], default: 'default' })
    role: string;

}

export const UserSchema = SchemaFactory.createForClass(User);