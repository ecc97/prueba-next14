import { PVehicle } from "@/app/core/application/ports/vehicles.port";
import { HttpClient } from "../utils/client-http";

export class VehiclesService implements PVehicle {
    private httpClient: HttpClient

    constructor() {
        this.httpClient = new HttpClient()
    }
    async getAllVehicles(page?: number, size?: number): Promise<IVehiclesResponse> {
        try {
            const url = page && size? `vehicles?page=${page}&size=${size}` : 'vehicles'
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
    // async getProjectById(id: number): Promise<IProjectResponse> {
    //     try {
    //         const response = await this.httpClient.get<IProjectResponse>(`projects/${id}`)
    //         return response;
    //     } catch (error) {
    //         console.log('Error obteniendo proyecto:', error)
    //         throw error
    //     }
    // async updateProject(id: number, req: IProjectRequest): Promise<IProjectRequest> {
    //     try {
    //         const response = await this.httpClient.put<IProjectRequest, IProjectRequest>(`projects/${id}`, req)
    //         return response;
    //     } catch (error) {
    //         console.log('Error actualizando proyecto:', error)
    //         throw error
    //     }
    // }
    // async deleteProject(id: number): Promise<IProjectDeleteResponse> {
    //     try {
    //         const response = await this.httpClient.delete<IProjectDeleteResponse>(`projects/${String(id)}`)
    //         return response;
    //     } catch (error) {
    //         console.log('Error eliminando proyecto:', error)
    //         throw error
    //     }
    // }
    // async getProjectReport(): Promise<ArrayBuffer> {
    //     try {
    //         const response = await this.httpClient.get<ArrayBuffer>('projects/report/download', true)
    //         return response;
    //     } catch (error) {
    //         console.log('Error obteniendo informe:', error)
    //         throw error
    //     }
    // }
}