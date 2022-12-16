/* eslint-disable prettier/prettier */
import { Document } from "mongoose";

export interface IPastry extends Document{
    readonly ref: string;
    readonly name: string;
    readonly description: string;
    readonly url: string;
    readonly quantity: number;
    readonly order: number;
    readonly tags: string;
}
