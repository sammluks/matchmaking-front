import Capa from './assets/matchmaking.jfif'
import IconeUsuario from './assets/16492.png'

import './styles.css'

export default function Card() {
    return (
        <article className="card">
            <div className="card__imagem">
                {/* <img src={imagemUrl} alt='imagem do post' /> */}
            </div>
            <div className='card__conteudo'>
                <div className='conteudo__texto'>
                    <h3>Título</h3>
                    <p>resumo</p>
                </div>

                <div className='conteudo__rodape'>
                    <div className='rodape__usuario'>
                        imagemUsuario
                        nomeUsuario
                    </div>
                </div>
            </div>
        </article>
    )
}