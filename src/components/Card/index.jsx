import Capa from './assets/matchmaking.jfif'
import IconeUsuario from './assets/16492.png'

import './styles.css'

export default function Card({id, imagem, titulo, autor, resumo}) {
    return (
        <article className="card">
            <div className="card__imagem">
                <img src={'data:image/png;base64,' + imagem} alt='imagem do post' />
            </div>
            <div className='card__conteudo'>
                <div className='conteudo__texto'>
                    <h3>{titulo}</h3>
                    <p>{resumo}</p>
                </div>

                <div className='conteudo__rodape'>
                    <ul>
                        <li>
                            <div className='rodape__usuario'>
                                <p>Autor: {autor}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    )
}