import Logo from './assets/matchmaking-logo.png'
import Feed from './assets/feed.svg'
import UserImg from './assets/user.svg'
import Info from './assets/info.svg'
import Exit from './assets/exit.png'
import './styles.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Sidebar() {
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        setIsLogged(localStorage.getItem('token') != null && localStorage.getItem('token') != undefined ? true : false);
    }, [])

    return (
        <aside className='w-56'>
            <a href='/'><center><img src={Logo} id='logo' alt='Logo do website Matchmaking-web' /></center></a>
            <nav>
                <ul className='lista-sidebar'>
                    {isLogged ?
                        <li>
                            {/* <a href='#' className='item__link-publicacao'>Publicar</a> */}
                            <Link className="item__link-publicacao" to="/postar">Publicar</Link>
                        </li>
                        :
                        null
                    }


                    <li>
                        <a href='/' className='item__link item__link--ativo'>
                            <img className="sidebar-img" src={Feed} alt='Imagem das publicações' />
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        {isLogged ?
                            <a href='#' className='item__link'>
                                <img className="sidebar-img" src={UserImg} alt='Imagem do usuário' />
                                <span>Usuário</span>
                            </a>
                            :
                            <a href='/cadastrar' className='item__link'>
                                <img className="sidebar-img" src={UserImg} alt='Imagem do usuário' />
                                <span>Cadastrar</span>
                            </a>}
                    </li>
                    <li>
                        <a href='/sobreNos' className='item__link'>
                            <img className="sidebar-img" src={Info} alt='Imagem do sobre nós' />
                            <span><center>Sobre nós</center></span>
                        </a>
                    </li>
                    <li>
                        {isLogged ?
                            <a href='/logout' className='item__link'>
                                <img className="sidebar-img" src={Exit} alt='Imagem para sair' />
                                <span>Sair</span>
                            </a>
                            :
                            null}
                    </li>
                </ul>
            </nav>
        </aside>
    )
}