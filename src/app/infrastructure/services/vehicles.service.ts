import { PVehicle } from "@/app/core/application/ports/vehicles.port";
import { HttpClient } from "../utils/client-http";

export class VehiclesService implements PVehicle {
    private httpClient: HttpClient

    constructor() {
        this.httpClient = new HttpClient()
    }
    async getAllVehicles(page?: number, size?: number): Promise<IVehiclesResponse> {
        try {
            const url = page && size ? `vehicles?page=${page}&size=${size}` : 'vehicles'
            const response = this.httpClient.get<IVehiclesResponse>(url)
            return response;
        } catch (error) {
            console.log('Error obteniendo vehículos:', error)
            throw error
        }
    }
    async addVehicle(req: FormData): Promise<IVehiclePostResponse> {
        try {
            const formData = true
            const response = await this.httpClient.post<IVehiclePostResponse, FormData>('vehicles', req, formData)
            return response;
        } catch (error) {
            console.log('Error añadiendo vehículo:', error)
            throw error
        }
    }
    async getVehicleById(id: number): Promise<IVehicleIDResponse> {
        try {
            const response = await this.httpClient.get<IVehicleIDResponse>(`vehicles/${id}`)
            return response;
        } catch (error) {
            console.log('Error obteniendo vehículo:', error)
            throw error
        }
    }
    async getVehicleMainById(id: number): Promise<IVehicleIDMainResponse> {
        try {
            const response = await this.httpClient.get<IVehicleIDMainResponse>(`vehicles/${id}/maintenance`)
            return response;
        } catch (error) {
            console.log('Error obteniendo proyecto:', error)
            throw error
        }
    }

        async deleteProject(id: number): Promise<IVehicleDelResponse> {
            try {
                const response = await this.httpClient.delete<IVehicleDelResponse>(`projects/${String(id)}`)
                return response;
            } catch (error) {
                console.log('Error eliminando proyecto:', error)
                throw error
            }
        }

    }