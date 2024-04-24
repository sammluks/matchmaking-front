import BarraDePesquisa from "../../components/BarraDePesquisa";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import Login from "../Login";

export default function InicialPage() {
    return (
        < div className='container' >
            <Sidebar />
            <div>
                <BarraDePesquisa />
                <ul className='list-cards'>
                    <Card />
                </ul>
            </div>
        </div >
    )
}