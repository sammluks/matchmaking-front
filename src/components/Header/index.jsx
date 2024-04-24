import { Container } from "@chakra-ui/react";
import Logo from "../Logo";
import './styles.css'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <Container>

                <ul className="opcoes">
                    <Link to="/" className="opcao">
                        <Logo></Logo>
                    </Link>
                    <li className="opcao"><Link to="/">Home</Link></li>
                    <li className="opcao"><Link to="/posts">Posts</Link></li>
                    <li className="opcao"><Link to="/register">Cadastro</Link></li>
                </ul>
            </Container>
        </nav>
    )
}