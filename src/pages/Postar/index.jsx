import { Card, CardHeader, FormControl, FormLabel, Input, Button, Link, CardContent, Typography, CardMedia, Grid, Paper, TextField, InputLabel, TextareaAutosize } from "@mui/material";
import "./styles.css"
import Logo from "/src/assets/matchmaking-logo-reduzido.png"
import * as Yup from 'yup'
import api from "../../services/api";
import { useNavigate } from 'react-router-dom';
import { Text, Textarea } from "@chakra-ui/react";
import FileInput from "../../components/FileInput";
import { useState } from "react";


const initialValues = {
    title: '',
    description: '',
    category: ''
}

const btnstyle = { margin: '8px 0' }

export default function Postar() {
    const navigate = useNavigate();

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    async function postar(e) {
        e.preventDefault();

        const data = {
            title: title,
            description: description,
            category: category,
            file: file
        }

        try {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('title', title);
            formData.append('description', description);
            formData.append('category', category);

            const response = await api.post('/auth/post', formData)

        } catch (error) {
            alert("Não foi possível postar. Favor tentar novamente")
        }
    }

    const updateResult = r => {
        setFile(r)
        console.log(r)
    }

    return (
        <Card
            sx={{ margin: "0em 20em 0em" }}
            className="card-form">
            <Grid container direction="row"
                justifyContent="center"
            >
                <CardMedia
                    className="img"
                    sx={{ width: "500px", height: "100px", borderRadius: '200px 200px 200px 200px' }}
                    image={Logo}
                />
            </Grid>
            <Typography variant="h2" color="text.secondary" gutterBottom component="div" align="center">
                Realizar postagem
            </Typography>
            <CardContent>
                <form onSubmit={postar}>
                    <InputLabel align='center'>Título do Post</InputLabel>
                    <Textarea
                        sx={{ margin: '1em 0em 1em 0em' }}
                        as={TextField}
                        name="title"
                        onChange={e => setTitle(e.target.value)}
                        fullWidth

                    />
                    <InputLabel align='center'>Texto</InputLabel>
                    <Textarea
                        sx={{ margin: '1em 0em 1em 0em', height: '500px' }}
                        name="description"
                        onChange={e => setDescription(e.target.value)}

                    />
                    <InputLabel align='center'>Categoria</InputLabel>
                    <Textarea
                        sx={{ margin: '1em 0em 1em 0em' }}
                        as={TextField}
                        name="category"
                        fullWidth
                        onChange={e => setCategory(e.target.value)}

                    />
                    {/* <input 
                            type="file" 
                            accept="image/*"
                            name="file" 
                            onChange={(e) => {
                                setFieldValue("file", e.target.files[0]);
                            }}
                            /> */}
                    <FileInput onFileChange={updateResult} />
                    <div className='button'>
                        <Button type='submit' color='primary' variant="contained"
                            style={btnstyle} fullWidth>Postar</Button>
                        {/* <Link className='link' to="/register"><Button colorscheme='blue' >Cadastrar-se</Button></Link> */}
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}