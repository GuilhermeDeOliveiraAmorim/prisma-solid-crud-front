import { useQuery } from "@tanstack/react-query";
import IUser from "../interfaces/IUser";
import { api } from "../services/backend";

const getAllUsers = async () => {
    const response = await api.get<IUser[]>("users");
    return response.data;
};

export default function useGetAllUsers() {
    return useQuery(["users"], () => getAllUsers());
}
