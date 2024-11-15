import React from 'react'
import { VehiclesService } from '@/app/infrastructure/services';
import Maintenance from '@/components/ui/templates/maintenance/Maintenance';

interface IParamsProps {
    params: {
        id: string;
    };
}

export default async function VehiclesPage({ params }: IParamsProps) {
    const useVehicleService = new VehiclesService()
    const vehicleId = parseInt(params.id);
    const vehicle = await useVehicleService.getVehicleById(vehicleId)
    const vehicleMain = await useVehicleService.getVehicleMainById(vehicleId)
    const vehicleData = vehicle.dataID
    const vehicleDataMain = vehicleMain.data
    
    return (
        <Maintenance vehicleData={vehicleData} vehicleMainData={vehicleDataMain} />
    )
}