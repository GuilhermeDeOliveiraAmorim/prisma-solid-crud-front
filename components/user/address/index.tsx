import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import { Button, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import Link from 'next/link';
import IAddress from "../../../src/interfaces/IAddress";

interface IUserAddressArr {
    arrAddress: IAddress[] | undefined;
}

export default function UserAddress(props: IUserAddressArr) {

    const { arrAddress } = props;

    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <Thead>
                    <Tr>
                        <Th>STREET</Th>
                        <Th>NUMBER</Th>
                        <Th>CITY</Th>
                        <Th>STATE</Th>
                        <Th>COUNTRY</Th>
                        <Th>ZIP CODE</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {arrAddress?.map(add =>
                        <Tr key={add.id}>
                            <Td>{add.street}</Td>
                            <Td>{add.street_number}</Td>
                            <Td key={add.city.id}>{add.city.name}</Td>
                            <Td key={add.state.id}>{add.state.name}</Td>
                            <Td key={add.country.id}>{add.country.name}</Td>
                            <Td>{add.zip_code}</Td>
                            <Td>
                                <Flex gap={4}>
                                    <Link href={`/user/view/${add.id}`}>
                                        <Button colorScheme='blue' size='xs'>
                                            <ViewIcon />
                                        </Button>
                                    </Link>
                                    <Link href={`/user/edit/${add.id}`}>
                                        <Button colorScheme='orange' size='xs'>
                                            <EditIcon />
                                        </Button>
                                    </Link>
                                    <Link href={`/user/delete/${add.id}`}>
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