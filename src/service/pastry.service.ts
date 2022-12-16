/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePastryDto } from 'src/dto/create-pastry.dto';
import { UpdatePastryDto } from 'src/dto/update-pastry.dto';
import { IPastry } from 'src/interface/pastry.interface';

@Injectable()
export class PastryService {

    constructor(@InjectModel('Pastry') private pastryModel: Model<IPastry>) { }

    async createPastry(createPastryDto: CreatePastryDto): Promise<IPastry> {
        const newPastry = await new this.pastryModel(createPastryDto);
        return newPastry.save();
    }

    async updatePastry(pastryId: string, updatePastryDto: UpdatePastryDto): Promise<IPastry> {
        const existingPastry = await this.pastryModel.findByIdAndUpdate(pastryId, updatePastryDto, { new: true });
        if (!existingPastry) {
            throw new NotFoundException(`Pastry #${pastryId} not found`);
        }
        return existingPastry;
    }

    async getAllPastries(): Promise<IPastry[]> {
        const pastryData = await this.pastryModel.find();
        if (!pastryData || pastryData.length == 0) {
            throw new NotFoundException('Pastries data not found!');
        }
        return pastryData;
    }

    async getPastry(pastryId: string): Promise<IPastry> {
        const existingPastry = await this.pastryModel.findById(pastryId).exec();
        if (!existingPastry) {
            throw new NotFoundException(`Pastry #${pastryId} not found`);
        }
        return existingPastry;
    }

    async deletePastry(pastryId: string): Promise<IPastry> {
        const deletedPastry = await this.pastryModel.findByIdAndDelete(pastryId);
        if (!deletedPastry) {
            throw new NotFoundException(`Pastry #${pastryId} not found`);
        }
        return deletedPastry;
    }

}
