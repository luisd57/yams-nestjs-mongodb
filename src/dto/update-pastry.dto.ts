/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreatePastryDto } from './create-pastry.dto';

export class UpdatePastryDto extends PartialType(CreatePastryDto) {}