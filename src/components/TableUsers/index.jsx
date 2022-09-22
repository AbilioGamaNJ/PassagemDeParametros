import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableUser } from "../TableUser"

export const TableUsers = ({list}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Nome</TableCell>
                        <TableCell align="right">E-mail</TableCell>
                    </TableRow>
                </TableHead>
                    {list.map((user, index) => (
                        <TableUser key={index} name={user.name} email={user.email} />
                    ))}
                <TableBody>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
