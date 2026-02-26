import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CarIdParamsDTO, CarsParamsDTO } from 'src/shared/dto/cars.params.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class CarsService {
    constructor(private prisma: PrismaService) {}

    async getCars(params: CarsParamsDTO) {
        const { search, limit = 10, page = 1, category } = params;
        const offset = limit * (page - 1);

        const whereCondition: Prisma.CarWhereInput = {
        ...(search && {
            model: {
            contains: search,
            mode: Prisma.QueryMode.insensitive,
            },
        }),

        ...(category && category !== "All" && {
            category: category,
        }),
        };

        const [cars, totalCount] = await this.prisma.$transaction([
            this.prisma.car.findMany({
                select: {
                    id: true,
                    model: true,
                    description: true,
                    basePrice: true,
                    range: true,
                    topSpeed: true,
                    modelImg: true,
                    moreInfo: true,
                    category: true,
                },
                where: whereCondition,
                take: limit,
                skip: offset,
                orderBy: { id: 'asc' },
            }),
            this.prisma.car.count({
                where: { ...whereCondition },
            }),
        ]);

        return {
            data: cars,
            totalCount,
            limit,
            offset
        };
    }

    async getCarById(carId: number) {
        return this.prisma.car.findUnique({
            where: { id: Number(carId) },
            include: {
                variants: true,
                colors: true,
            }
        });
    }
};
