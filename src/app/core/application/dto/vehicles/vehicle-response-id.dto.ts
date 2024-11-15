//GET car by id response
interface IVehicleIDResponse {
    statusCode: number;
    message:    string;
    dataID:       VehicleID;
}

interface VehicleID {
    id:           number;
    make:         string;
    model:        string;
    year:         number;
    licensePlate: string;
    photo:        string;
}

//GET Maintenance ID
interface IVehicleIDMainResponse {
    statusCode: number;
    message:    string;
    data:       VehicleIDMain[];
    metadata:   Metadata;
}

interface VehicleIDMain {
    id:      number;
    type:    string;
    date:    Date;
    mileage: number;
    notes:   string;
}

interface MetadataID {
    totalItems:   number;
    itemCount:    number;
    itemsPerPage: number;
    totalPages:   number;
    currentPage:  number;
}