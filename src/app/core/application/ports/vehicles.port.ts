export interface PVehicle {
    /**
     * Get all vehicles
     * @param page
     * @param size
     * @returns {Promise<IVehiclesResponse>} All vehicles response
    */
    getAllVehicles(page?: number, size?: number): Promise<IVehiclesResponse>
    /**
     * Post vehicle
     * @param req {FormData} - vehicle request
     * @returns {Promise<IVehiclePostResponse>} 
    */
    addVehicle(req: FormData): Promise<IVehiclePostResponse>
    /**
     * Get vehicle by id
     * @param id
     * @returns {Promise<IVehicleIDResponse>} Vehicle by id response
    */
    getVehicleById(id: number): Promise<IVehicleIDResponse>
    /**
     * Get vehicle by id
     * @param id
     * @returns {Promise<IVehicleIDMainResponse>} Vehicle by id response
    */
    getVehicleMainById(id: number): Promise<IVehicleIDMainResponse>
}