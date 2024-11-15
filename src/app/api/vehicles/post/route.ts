import { NextResponse } from "next/server";
import { VehiclesService } from "@/app/infrastructure/services";

const useVehicleService = new VehiclesService()

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const newCar = await useVehicleService.addVehicle(formData);
        return NextResponse.json(newCar, { status: 200});
    } catch (error) {
        console.log('Error al registar en el servidor vehículo:', error)
        return NextResponse.json({ statusCode: 500, message: 'Error al registrar vehículo' }, { status: 500 });
    }
}