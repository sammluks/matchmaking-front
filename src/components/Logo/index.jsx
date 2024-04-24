import { Image } from '@chakra-ui/react';
import logo from './../../assets/matchmaking-logo.png';
import './styles.css'

export default function Logo() {
    return (
        <div className='logo'>
            {/* <img src={logo} height="200px" width="200px"></img> */}
            <Image src={logo} height='200px'></Image>
        </div>
    )
}