interface IVehiclesResponse {
    statusCode: number;
    message:    string;
    data:       Vehicles[];
    metadata:   Metadata;
}

interface Vehicles {
    id:           number;
    make:         string;
    model:        string;
    year:         number;
    licensePlate: string;
    photo:        null | string;
}

interface Metadata {
    totalItems:   number;
    itemCount:    number;
    itemsPerPage: number;
    totalPages:   number;
    currentPage:  number;
}

//POST response
interface IVehiclePostResponse {
    statusCode: number;
    message:    string;
    data:       VehiclePost;
}

interface VehiclePost {
    make:         string;
    model:        string;
    year:         number;
    licensePlate: string;
    photo:        string;
    id:           number;
}

interface IVehicleDelResponse {
    statusCode: number;
    message:    string;
    data:       Data;
}

interface Data {
    message: string;
}