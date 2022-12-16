/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Pastry {

    @Prop()
    ref: string;

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    url: string;

    @Prop()
    quantity: number;

    @Prop()
    order: number;

    @Prop()
    tags: string;
}

export const pastrySchema = SchemaFactory.createForClass(Pastry);