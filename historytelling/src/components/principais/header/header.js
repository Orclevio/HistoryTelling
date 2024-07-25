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
                            <li className="dropdown-item">Nova anotação</li>
                            <li className="dropdown-item">Todas as anotações</li>
                        </ul>
                    </li>
                </ul>
                <div className="navitem-right">
                    <IconButton>
                        <AccountCircleIcon fontSize='large' sx={{ color: blue[800] }} />
                    </IconButton>
                    <ul className="dropdown2">
                        <li className="dropdown-item">Dados de cadastro</li>
                        <li className="dropdown-item">Configurações</li>
                        <li className="dropdown-item">Sair</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;
