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