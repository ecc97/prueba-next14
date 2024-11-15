interface ILoginResponse {
    statusCode: number;
    message:    string;
    data:       Data;
}

interface Data {
    access_token: string;
    user:         User;
}

interface User {
    email: string;
    id: number;
}