import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePost } from "../TablePost"

export const TablePosts = ({list}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Foto Perfil</TableCell>
                        <TableCell align="right">Nome de Usuário</TableCell>
                        <TableCell align="right">Descrição</TableCell>
                        <TableCell align="right">Foto Post</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {list.map((post, index) => (
                        <TablePost key={index} fotoPerfil={post.fotoPerfil} nomeUsuario={post.nomeUsuario} 
                        descricao={post.descricao} fotoPost={post.fotoPost} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
