import { Textarea } from "@chakra-ui/react";
import { Button, Card, CardContent, CardMedia, Grid, InputLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import FileInput from "../../components/FileInput";
import Sidebar from "../../components/Sidebar";
import api from "../../services/api";
import "./styles.css";
import Logo from "/src/assets/matchmaking-logo-reduzido.png";


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
            description.replace(/(?:\r\n|\r|\n)/g, '<br />')
            formData.append('image', file);
            formData.append('title', title);
            formData.append('body', description);
            formData.append('category', category);
            formData.append('author', localStorage.getItem('username'));

            const response = await api.post('/posts/auth', formData)

            navigate('/')

        } catch (error) {
            alert("Não foi possível postar. Favor tentar novamente")
            console.log(error)
        }
    }

    const updateResult = r => {
        setFile(r)
        console.log(r)
    }

    return (
        < div className='container' >
            <Sidebar />
            <div>
                <Card
                    // sx={{ margin: "0em 20em 0em" }}
                    className="card-form">
                    <Grid container direction="row"
                        justifyContent="center"
                    >
                        <CardMedia
                            className="card__imagem_postar"
                            // sx={{ width: "100%", height: "200px", borderRadius: '200px 200px 200px 200px' }}
                            image={Logo}
                        />
                    </Grid>
                    <Typography variant="h2" color="text.secondary" gutterBottom component="div" align="center">
                        Realizar postagem
                    </Typography>
                    <CardContent>
                        <form onSubmit={postar}>
                            <InputLabel
                                sx={{ margin: '3em 0em 1em 0em' }}
                                align='center'>Título do Post</InputLabel>
                            <Textarea
                                // sx={{ margin: '1em 0em 1em 0em' }}
                                as={TextField}
                                name="title"
                                onChange={e => setTitle(e.target.value)}
                                fullWidth

                            />
                            <InputLabel
                                sx={{ margin: '3em 0em 1em 0em' }}
                                align='center'>Texto</InputLabel>
                            <Textarea
                                sx={{ height: '400px' }}
                                name="description"
                                onChange={e => setDescription(e.target.value)}

                            />
                            <InputLabel
                                sx={{ margin: '3em 0em 1em 0em' }}
                                align='center'>Categoria</InputLabel>
                            <Textarea
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
                            <InputLabel
                                sx={{ margin: '3em 0em 1em 0em' }}
                                align='center'>Imagem do post</InputLabel>
                            <FileInput
                                onFileChange={updateResult} />
                            <div className='button'>
                                <Button 
                                type='submit' color='success' variant="contained"
                                    style={btnstyle} fullWidth>Postar</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div >

    )
}