import React from 'react';
import './header.css';
import { blue } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
    return (
        <div className="header">
            <nav className="navheader">
                <ul className="navlist">
                    <li className="navitem">Início</li>
                    <li className="navitem">
                        Entradas
                        <ul className="dropdown">
                            <li className="dropdown-item" href="/">Nova anotação</li>
                            <li className="dropdown-item">Todas as anotações</li>
                        </ul>
                    </li>
                    <li className="navitem">
                        <IconButton> <AccountCircleIcon sx={{ color: blue[800] }}/></IconButton>
                        <ul className="dropdown">
                            <li className="dropdown-item">Dados de cadastro</li>
                            <li className="dropdown-item">Configurações</li>
                            <li className="dropdown-item">Sair</li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
