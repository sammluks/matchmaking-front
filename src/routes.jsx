import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Welcome from "./pages/welcome";
import Posts from "./pages/Posts";
import Header from "./components/Header";
import InitialPage from "./pages/InicialPage";
import Postar from "./pages/Postar";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Login/>}/> */}
                <Route path="/" element={<InitialPage/>}/>
                <Route path="/postar" element={<Postar/>}/>
                <Route path="/register" element={<Cadastro/>}/>
                <Route path="/welcome" element={<Welcome/>}/>
                <Route path="/posts/:id" element={<Posts/>}/>
                <Route path="/header" element={<Header/>}/>
            </Routes>
        </BrowserRouter>
    )
}