import { Controller, Get, Param, Query } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsParamsDTO } from 'src/shared/dto/cars.params.dto';
import { ParseIntPipe } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    constructor(private readonly carsService: CarsService) {}

    @Get('/getAllCars')
    getCar(@Query() queryParams: CarsParamsDTO) {
        return this.carsService.getCars(queryParams);
    }

    @Get(':carId')
    getCarById(
        @Param('carId', ParseIntPipe) carId: number,
    ) {
        return this.carsService.getCarById(carId);
    }
}
