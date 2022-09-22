import { Button, TextField } from "@mui/material"
import { useState } from "react"

    export const SaveUser = ({onAddUser}) => {
        
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')

        function handleSaveUser(){
            const data = {
                name, email
            }
            console.log(data)
            onAddUser(data)
        }
    
    return(
        <>
        <TextField 
            label="Nome" 
            variant="outlined"
            value={name}
            onChange={e => setName(e.target.value)} />
        <TextField 
            label="E-mail" 
            variant="outlined"
            value={email}
            onChange={e => setEmail(e.target.value)} />
        <Button onClick={handleSaveUser} variant="contained">Salvar</Button>
        </>
    )
}