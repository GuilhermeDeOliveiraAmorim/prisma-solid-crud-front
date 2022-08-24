import { useQuery } from "@tanstack/react-query";
import IUser from "../interfaces/IUser";
import { api } from "../services/backend";

const getUser = async (user_id: string) => {
    const response = await api.get<IUser>(`/user/${user_id}`);
    return response.data;
};

export default function useGetUser(user_id: string) {
    return useQuery(["user"], () => getUser(user_id));
}
