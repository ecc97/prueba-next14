import React from 'react'
import { VehiclesService } from '@/app/infrastructure/services'
import VehiclesTemplate from '@/components/ui/templates/vehicles/VehiclesTemplate'

interface IParamsProps {
    searchParams: {
        page?: string;
        size?: string;
        name?: string
    }
}

export default async function VehiclesPage({ searchParams }: IParamsProps) {
    const useVehiclesService = new VehiclesService()
    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const size = searchParams.size ? parseInt(searchParams.size) : 10;
    const vehicles = await useVehiclesService.getAllVehicles(page, size)
    console.log(vehicles)
    return (
        <VehiclesTemplate dataVehicles={vehicles} />
    )
}
