import { useEffect, useState } from "react";
import BarraDePesquisa from "../../components/BarraDePesquisa";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import Login from "../Login";
import axios from "axios";
import api from "../../services/api";
import './styles.css'

export default function InicialPage() {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const response = await api.get("/posts")
            setPosts(response.data.content)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        < div className='container' >
            <Sidebar />
            <div>
                <BarraDePesquisa />
                <ul className='list-cards'>
                    {posts ? posts.map((post) => (
                        <li key={post.id}>
                            <Card
                                imagem={post.image}
                                titulo={post.title}
                                autor={post.author}
                                resumo={post.summary}
                            />
                        </li>
                    )) : null}
                </ul>
            </div>
        </div >
    )
}