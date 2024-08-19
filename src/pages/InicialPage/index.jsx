import { useEffect, useState } from "react";
import BarraDePesquisa from "../../components/BarraDePesquisa";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
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
                <br/>
                <br/>
                <ul className='list-cards'>
                    {posts ? posts.map((post) => (
                        <li key={post.id}>
                            <Card
                                id={post.id}
                                imagem={post.image}
                                titulo={post.title}
                                autor={post.author}
                                resumo={post.summary}
                            />
                            <br/>
                        </li>
                    )) : null}
                </ul>
            </div>
        </div >
    )
}