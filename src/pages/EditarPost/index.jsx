import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Card, CardMedia } from "@mui/material";
import { Textarea } from "@chakra-ui/react";
import { Button, InputLabel, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';

import './styles.css'


export default function EditarPost() {
    const { id } = useParams();

    const [post, setPost] = useState([])
    const [imagem, setImage] = useState('')
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
    const [postId, setPostId] = useState('')


    const btnstyle = { margin: '8px 0' }

    const navigate = useNavigate();

    const getPost = async () => {
        try {
            const response = await api.get(`/posts/${id}`)
            setPost(response.data)
            setImage('data:image/png;base64,' + response.data.image)
            setBody(response.data.body)
            setTitle(response.data.title)
            setPostId(response.data.id)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    async function postar(e) {

        e.preventDefault();

        const data = {
            title: title,
            description: body,
        }

        try {
            const formData = new FormData();
            body.replace(/(?:\r\n|\r|\n)/g, '<br />')
            formData.append('title', title);
            formData.append('body', body);

            const response = await api.put(`/posts/${id}`, formData);

            
        } catch (error) {
            alert("Não foi possível postar. Favor tentar novamente")
            console.log(error)
        }
        navigate('/')
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        < div className='container' >
            <Sidebar />
            <div>
                <Card>
                    <form onSubmit={postar}>
                        <div>
                            <div className="imagem-card">
                                <CardMedia
                                    sx={{ margin_left: 30 }}
                                    className="imagem_post"
                                    component="img"
                                    image={imagem}
                                />
                            </div>

                            {/* <Typography
                        variant="h1"
                        className="tipografia-post-titulo"
                    > {post.title}
                    </Typography> */}

                            <InputLabel
                                sx={{ margin: '3em 0em 1em 0em' }}
                                align='center'>Título do Post</InputLabel>
                            <Textarea
                                as={TextField}
                                name="title"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                fullWidth
                            />
                        </div>


                        <InputLabel
                            sx={{ margin: '3em 0em 1em 0em' }}
                            align='center'>Texto</InputLabel>
                        <Textarea
                            sx={{ height: '400px' }}
                            name="description"
                            onChange={e => setBody(e.target.value)}
                            value={body}
                        />
                        <div className='button'>
                            <Button
                                type='submit' color='success' variant="contained"
                                style={btnstyle} fullWidth>Editar</Button>
                        </div>
                    </form>

                </Card>
            </div>
        </div >
    )
}