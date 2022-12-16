/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePastryDto {
    @IsString()
    @MinLength(3)
    @MaxLength(30)
    @IsNotEmpty()
    readonly ref: string;

    @IsString()
    @MinLength(3)
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @MinLength(10)
    @MaxLength(255)
    @IsNotEmpty()
    readonly description: string;

    @IsString()
    @IsNotEmpty()
    readonly url: string;

    @IsNumber()
    @IsNotEmpty()
    readonly quantity: number;

    @IsNumber()
    @IsNotEmpty()
    readonly order: number;

    @IsString()
    @IsNotEmpty()
    readonly tags: string;



}