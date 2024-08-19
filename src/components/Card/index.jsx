import { EditIcon } from '../../assets/Icons/editIcon'
import { RemoveIcon } from '../../assets/Icons/removeIcon'
import { Link } from "react-router-dom";

import './styles.css'

export default function Card({ id, imagem, titulo, autor, resumo, onRemover, index }) {
    let link = `/posts/${id}`;
    let editLink = `/posts/${id}/edit`;
    let removeLink = `/posts/${id}/remove`;

    return (
        <article className="card">
            <div className="card__imagem">
                <img src={'data:image/png;base64,' + imagem} alt='imagem do post' />
            </div>
            <div className='card__conteudo'>
                <div className='conteudo__texto'>
                    <Link to={link}><h3>{titulo}</h3></Link>
                    <p>{resumo}</p>
                </div>

                <div className='conteudo__rodape'>
                    <div className='autor'>
                        <ul>
                            <li>
                                <p>Autor: {autor}</p>
                            </li>
                        </ul>
                    </div>
                    <div className='editar'>
                        <Link to={editLink}><EditIcon /></Link>
                    </div>
                    <div className='excluir'>
                        <button onClick={() => (onRemover(id))}><RemoveIcon /></button>
                    </div>
                </div>
            </div>
        </article>
    )
}