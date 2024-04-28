import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import './styles.css'

export default function Posts() {
    const { id } = useParams();

    const [post, setPost] = useState([])
    const [imagem, setImage] = useState('')
    const [body, setBody] = useState('')

    const getPost = async () => {
        try {
            const response = await api.get(`/posts/${id}`)
            setPost(response.data)
            setImage('data:image/png;base64,' + response.data.image)
            setBody(response.data.body.replace(/(?:\r\n|\r|\n)/g, '<br />'))
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        < div className='container' >
            <Sidebar />
            <div>
                <Card>

                    <Typography
                        variant="h1"
                        className="tipografia-post-titulo"
                    > {post.title}
                    </Typography>

                    <div className="imagem-card">
                        <CardMedia
                            sx={{ margin_left: 30 }}
                            className="imagem_post"
                            component="img"
                            image={imagem}
                        />
                    </div>

                    <CardContent>
                        <p dangerouslySetInnerHTML={{__html: body}} />
                    </CardContent>

                </Card>
            </div>
        </div >
    )
}