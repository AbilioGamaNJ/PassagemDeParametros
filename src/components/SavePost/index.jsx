import { Button, TextField } from "@mui/material"
import { useState } from "react"

    export const SavePost = ({onAddPost}) => {
        
        const [fotoPerfil, setFotoPerfil] = useState('')
        const [nomeUsuario, setNomeUsuario] = useState('')
        const [descricao, setDescricao] = useState('')
        const [fotoPost, setFotoPost] = useState('')

        function handleSavePost(){
            const data = {
                fotoPerfil, 
                nomeUsuario, 
                descricao,
                fotoPost 
            }
            console.log(data)
            onAddPost(data)
        }
    
    return(
        <>
        
        <TextField 
            label="Foto de Perfil" 
            variant="outlined"
            value={fotoPerfil}
            onChange={e => setFotoPerfil(e.target.value)} />

        <TextField 
            label="Nome de usuário" 
            variant="outlined"
            value={nomeUsuario}
            onChange={e => setNomeUsuario(e.target.value)} />

        <TextField 
            label="Descrição" 
            variant="outlined"
            value={descricao}
            onChange={e => setDescricao(e.target.value)} />

        <TextField 
            label="Foto do Post" 
            variant="outlined"
            value={fotoPost}
            onChange={e => setFotoPost(e.target.value)} />

        
        <Button onClick={handleSavePost} variant="contained">Salvar</Button>
        </>
    )
}