import React from 'react'
import { VehiclesService } from '@/app/infrastructure/services'
import VehiclesTemplate from '@/components/ui/templates/vehicles/VehiclesTemplate'

export default async function VehiclesPage() {
    const useVehiclesService = new VehiclesService()
    const vehicles = await useVehiclesService.getAllVehicles()
    console.log(vehicles)
  return (
    <VehiclesTemplate dataVehicles={vehicles} />
  )
}
