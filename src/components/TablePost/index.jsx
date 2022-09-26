import { TableCell, TableRow } from "@mui/material"

export const  TablePost = ({fotoPerfil, nomeUsuario, descricao, fotoPost }) =>{
    return(
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="right">{fotoPerfil}</TableCell>
            <TableCell align="right">{nomeUsuario}</TableCell>
            <TableCell align="right">{descricao}</TableCell>
            <TableCell align="right">{fotoPost}</TableCell>
        </TableRow>
    )
}