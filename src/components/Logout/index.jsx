import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate substitui o antigo useHistory
import { useEffect, useState } from "react";


export default function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login'); // Redireciona para a página de login
    };

    const logout = () => {
        // Remove o token de autenticação ou qualquer outro dado
        localStorage.removeItem('token');

        // Adicione qualquer outra lógica de logout necessária aqui
    };

    useEffect(() => {
        handleLogout();
    }, [])

    return;
};