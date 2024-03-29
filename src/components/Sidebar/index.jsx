import Logo from './assets/matchmaking-logo.png'
import Feed from './assets/feed.svg'
import UserImg from './assets/user.svg'
import Info from './assets/info.svg'
import Exit from './assets/exit.png'
import './styles.css'

export default function Sidebar() {
    return (
        <aside>
            <img src={Logo} id='logo' alt='Logo do website Matchmaking-web'/>
            <nav>
                <ul className='lista-sidebar'>
                    <li>
                        <a href='#' className='item__link-publicacao'>Publicar</a>
                    </li>
                    <li>
                        <a href='#' className='item__link item__link--ativo'>
                            <img src={Feed} alt='Imagem das publicações'/>
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link'>
                            <img src={UserImg} alt='Imagem do usuário'/>
                            <span>Usuário</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link'>
                            <img src={Info} alt='Imagem do sobre nós'/>
                            <span>Sobre nós</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link'>
                            <img src={Exit} alt='Imagem para sair'/>
                            <span>Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}