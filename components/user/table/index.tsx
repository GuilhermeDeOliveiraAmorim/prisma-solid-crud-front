import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import useGetAllUsers from '../../../src/hooks/useGetAllUsers';

export default function UsersTable() {

    const users = useGetAllUsers();

    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
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
                            <Td>{user.id}</Td>
                            <Td>{user.name}</Td>
                            <Td>{user.email}</Td>
                            <Td>{user.password}</Td>
                            <Td>{user.created_at}</Td>
                            <Td>ver</Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    )
}