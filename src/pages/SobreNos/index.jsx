import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import './styles.css'
import LogoSite from "../../assets/matchmaking-logo.png"

export default function SobreNos() {
    return (
            < div className='container' >
            <Sidebar />
                    <Card
                    className="card-sobrenos"
                    >

                        <Typography
                            variant="h1"
                            className="tipografia-post-titulo">
                            Sobre nós
                        </Typography>

                        <div className="imagem-card">
                            <center>
                                <CardMedia
                                    className="imagem_post_sobrenos"
                                    component="img"
                                    image={LogoSite}
                                />
                            </center>
                        </div>

                        <CardContent className="texto">
                            <p>
                                Este blog foi criado por Samuel Lucas Irene Dionisio de Moraes e João Marcos Brandão Barbosa
                                como projeto para o Trabalho de Conclusão de Curso do tecnológo de Tecnologia em Sistemas para Internet
                                do Instituto Federal de Brasília - IFB.

                            </p>
                            <br />
                            <p>
                                O intuito do portal é facilitar a disseminação de conhecimentos em relação ao matchmaking e seus conceitos num sítio web,
                                utilizando uma linguagem simples e baseando-se em artigos acadêmicos já publicados.
                            </p>
                        </CardContent>
                    </Card>
            </div >
    )
}