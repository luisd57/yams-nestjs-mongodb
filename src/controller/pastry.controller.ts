/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreatePastryDto } from 'src/dto/create-pastry.dto';
import { UpdatePastryDto } from 'src/dto/update-pastry.dto';
import { PastryService } from 'src/service/pastry.service';

@Controller('pastry')
export class PastryController {
    constructor(private readonly pastryService: PastryService) { }

    @Post()
    async createPastry(@Res() response, @Body() CreatePastryDto: CreatePastryDto) {
        try {
            const newPastry = await this.pastryService.createPastry(CreatePastryDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Pastry successfully created.',
                newPastry,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error: pastry not created.',
                error: 'Bad request'
            })
        }
    }

    @Put('/:id')
    async updatePastryById(@Res() response, @Param('id') pastryId: string, @Body() UpdatePastryDto: UpdatePastryDto) {
        try {
            const existingPastry = await this.pastryService.updatePastry(pastryId, UpdatePastryDto);
            return response.status(HttpStatus.OK).json({
                message: 'Pastry successfully updated',
                existingPastry,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get()
    async getPastries(@Res() response) {
        try {
            const pastryData = await this.pastryService.getAllPastries();
            return response.status(HttpStatus.OK).json({
                message: 'Pastries data successfully fetched', pastryData,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('/:id')
    async getPastryById(@Res() response, @Param('id') pastryId: string) {
        try {
            const existingPastry = await this.pastryService.getPastry(pastryId);
            return response.status(HttpStatus.OK).json({
                message: 'Pastry successfully found', existingPastry,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete('/:id')
    async deletePastryById(@Res() response, @Param('id') pastryId: string){
        try {
            const deletedPastry = await this.pastryService.deletePastry(pastryId);
            return response.status(HttpStatus.OK).json({
                message: 'Student successfully deleted', deletedPastry,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }



}
