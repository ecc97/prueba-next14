export interface PVehicle {
    /**
     * Get all vehicles
     * @param page
     * @param size
     * @returns {Promise<IVehiclesResponse>} All vehicles response
    */
    getAllVehicles(page?: number, size?: number): Promise<IVehiclesResponse>
}