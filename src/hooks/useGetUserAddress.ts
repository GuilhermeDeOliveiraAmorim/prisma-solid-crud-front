import { useQuery } from "@tanstack/react-query";
import { api } from "../services/backend";
import IAddress from "../interfaces/IAddress";

const getUserAddress = async (user_address: string | string[] | undefined) => {
    const response = await api.get<IAddress[]>(
        `/get-user-address/${user_address}`
    );
    return response.data;
};

export default function useGetUserAddress(
    user_address: string | string[] | undefined
) {
    return useQuery(["user", user_address], () => getUserAddress(user_address));
}
