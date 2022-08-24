import { useMutation } from "@tanstack/react-query";
import IUser from "../interfaces/IUser";
import { api } from "../services/backend";

const postUser = async (user: IUser) => {
    const response = await api.post<IUser>("/user", user);
    return response.data;
};

export default function usePostUser(user: IUser) {
    return useMutation(["user"], () => postUser(user));
}
