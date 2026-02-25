import { IsNumber, IsOptional, IsString } from "class-validator";
import { Type } from 'class-transformer';

export class CarsParamsDTO {
    @Type(() => Number)
    @IsNumber()
    @IsOptional()
    limit?: number;

    @Type(() => Number)
    @IsNumber()
    @IsOptional()
    page?: number;

    @IsString()
    @IsOptional()
    search?: string;

    @IsString()
    @IsOptional()
    filter?: string;
    
    @IsString()
    @IsOptional()
    category?: string;
}

export class CarIdParamsDTO {
    @Type(() => Number)
    @IsNumber()
    carId: number;
}

