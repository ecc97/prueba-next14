import { VehiclesService } from "@/app/infrastructure/services";
import NextResponse from "next/server";

const useVehicleService = new VehiclesService();

export async function DELETE(req: Request, {params}: { params: Promise<{id: number}>}){
    try {
        const id = (await params).id;
        const { data } = await useVehicleService.deleteProject(id);
        return NextResponse.json(data, { status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error eliminando proyecto:' }, { status: 500 } )
    }
}