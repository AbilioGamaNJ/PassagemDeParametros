import { TableCell, TableRow } from "@mui/material"

export const  TableUser = ({name, email}) =>{
    return(
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="right">{name}</TableCell>
            <TableCell align="right">{email}</TableCell>
        </TableRow>
    )
}