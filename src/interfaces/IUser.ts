import IUserAddress from "./IUserAddress";

export default interface IUser {
    id: string;
    name: string;
    email: string;
    created_at: string;
    password: string;
    UserAddress: IUserAddress[];
}
