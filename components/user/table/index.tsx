import { Button, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import useGetAllUsers from '../../../src/hooks/useGetAllUsers';
import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function UsersTable() {

    const users = useGetAllUsers();

    return (
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
                    {users.data?.map(user =>
                        <Tr key={user.id}>
                            <Td>{user.name}</Td>
                            <Td>{user.email}</Td>
                            <Td>{user.password}</Td>
                            <Td>{user.created_at}</Td>
                            <Td>
                                <Flex gap={4}>
                                    <Link href={`/users/view/${user.id}`}>
                                        <Button colorScheme='blue' size='xs'>
                                            <ViewIcon />
                                        </Button>
                                    </Link>
                                    <Link href={`/users/edit/${user.id}`}>
                                        <Button colorScheme='orange' size='xs'>
                                            <EditIcon />
                                        </Button>
                                    </Link>
                                    <Link href={`/users/delete/${user.id}`}>
                                        <Button colorScheme='red' size='xs'>
                                            <DeleteIcon />
                                        </Button>
                                    </Link>
                                </Flex>
                            </Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    )
}