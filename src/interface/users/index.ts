export interface IUserRequest {
    name: string;
    age: number;
}

export interface IUserPatch {
    name?: string;
    age?: number;
}