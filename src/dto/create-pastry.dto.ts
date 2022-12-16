/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CreatePastryDto {
    @IsString()
    @Min(3)
    @Max(30)
    @IsNotEmpty()
    readonly ref: string;

    @IsString()
    @Min(3)
    @Max(30)
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @Min(10)
    @Max(255)
    @IsNotEmpty()
    readonly description: string;

    @IsString()
    @IsNotEmpty()
    readonly url: string;

    @IsString({ each: true })
    @IsNotEmpty()
    readonly tags: string[];

    @IsNumber()
    @IsNotEmpty()
    readonly quantity: number;

    @IsNumber()
    @IsNotEmpty()
    readonly order: number;


}