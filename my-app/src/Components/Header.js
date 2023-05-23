import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './assets/header.css'
import { useNavigate } from 'react-router-dom'
function Header () {
    const navigate = useNavigate();
    const HandlLogin = () =>{
        navigate('/')
    }
    return (
        <div class="main">
        <header>
            <div class="header-container">
                <div class="header-logo-container">
                    <div class="header-logo">
                        <label htmlFor="text" className='text_header'>QUẢN LÝ CHI TIÊU</label>
                    </div>
                </div>
                <div class="header-content">
                    <div class="nav-top">
                        <div class="col2 nav-top-right">
                            <ul class="nav-log">
                                <li class="log sign-in">
                                    <button onClick={HandlLogin} class="">Đăng nhập</button>
                                </li>
                                <li class="log sign-up">
                                    <button class="">Đăng kí</button>
                                    </li>
                            </ul>
                        </div>
                    </div>
                    <div class="nav-bottom">
                        <ul class="nav-main">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/wallet">Wallet</a></li>
                            <li><a href="/transactions">Transactions</a></li>
                            <li><a href="/category">Category</a></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </header>
    </div>
    );
}

export default Header;