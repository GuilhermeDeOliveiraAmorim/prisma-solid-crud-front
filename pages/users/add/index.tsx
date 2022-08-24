import { Box, Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import IUser from "../../../src/interfaces/IUser";
import { api } from "../../../src/services/backend";

export default function AddUser() {

    const [userInfo, setUserInfo] = useState();

    const toast = useToast();

    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data: any) => {
        return api.post<IUser>("/user", data)
            .then(function (response) {
                toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                });
                console.log(response);
            })
            .catch(function (error) {
                toast({
                    title: 'E-mail already registered.',
                    description: "This email has already been used by you or someone else.",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                });
                console.log(error);
            });
    };

    useEffect(() => {
        async (userInfo: any) => {
            return await api.post<IUser>("/user", userInfo);
        };
    }, [userInfo])

    console.log(userInfo);

    return (
        <FormControl>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box marginBottom={10}>
                    <FormLabel>Name</FormLabel>
                    <Input {...register('name')} name="name" id="name" type='text' />
                </Box>
                <Box marginBottom={10}>
                    <FormLabel>Email</FormLabel>
                    <Input {...register('email')} name="email" id="email" type='email' />
                </Box>
                <Box marginBottom={10}>
                    <FormLabel>Password</FormLabel>
                    <Input {...register('password')} name="password" id="password" type='password' />
                </Box>
                <Button
                    colorScheme='teal'
                    type='submit'
                >
                    Submit
                </Button>
            </form>
        </FormControl>
    )
}