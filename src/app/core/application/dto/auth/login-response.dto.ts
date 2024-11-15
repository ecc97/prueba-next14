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
    sub:   number;
    role:  string;
    photo: string;
}