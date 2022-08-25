import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import { Button, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useRouter } from "next/router";
import Link from 'next/link';
import useGetUser from "../../../src/hooks/useGetUser";
import UserAddress from '../../../components/user/address';
import useGetUserAddress from '../../../src/hooks/useGetUserAddress';

export default function UserView() {

    const router = useRouter();

    const { id } = router.query;

    const user = useGetUser(id);

    const address = useGetUserAddress(id);

    console.log(address.data);

    return (
        <>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>EMAIL</Th>
                            <Th>PASSWORD</Th>
                            <Th>CREATED AT</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr key={user.data?.id}>
                            <Td>{user.data?.name}</Td>
                            <Td>{user.data?.email}</Td>
                            <Td>{user.data?.password}</Td>
                            <Td>{user.data?.created_at}</Td>
                            <Td>
                                <Flex gap={4}>
                                    <Link href={`/user/view/${user.data?.id}`}>
                                        <Button colorScheme='blue' size='xs'>
                                            <ViewIcon />
                                        </Button>
                                    </Link>
                                    <Link href={`/user/edit/${user.data?.id}`}>
                                        <Button colorScheme='orange' size='xs'>
                                            <EditIcon />
                                        </Button>
                                    </Link>
                                    <Link href={`/user/delete/${user.data?.id}`}>
                                        <Button colorScheme='red' size='xs'>
                                            <DeleteIcon />
                                        </Button>
                                    </Link>
                                </Flex>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            {/* <UserAddress arrAddress={address.data} /> */}
        </>
    )
}