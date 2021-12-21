import React, {useContext} from "react";
import './Header.css'
import '../Button/Button.css'
import {Link} from "react-router-dom";
import logo from '../Img/logo.png'
import {AppContext} from "../../App";



function Header(){
    const {isVisible, setIsVisible, isAuth, setIsAuth} = useContext(AppContext)
    return(
        <header className={'header'}>
            <Link className={'header__logo-link'} to = {'/'}>
                <img src={logo} className={'header__logo-img'} alt={"logo"}/>
                <p className={'header__log-title'}>Shiplace</p>
            </Link>
            <nav className={'header__menu'}>
                <ul className={'header__menu-list'}>
                    <li className={'header__item'}>
                        <Link className={'header__item-link'} to = {'/'}>Главная</Link>
                    </li>
                    <li className={'header__item'}>
                        <Link className={'header__item-link'} to = {'Reviews'}>Отзывы</Link>
                    </li>
                    <li className={'header__item'}>
                        <Link className={'header__item-link'} to = {'Works'}>Как работаем</Link>
                    </li>
                    <li className={'header__item'}>
                        <Link className={'header__item-link'} to = {'Management'}>Менеджеры</Link>
                    </li>
                </ul>
            </nav>
            {!isAuth && <button className={'button header__button'} onClick={()=> setIsVisible(true)}>Вход</button>}
            {isAuth && <button className={'button header__button'} onClick={()=> setIsAuth(false)}>Выход</button>}
            {/*<Link className={'header__button-link'} to = {'/'}>*/}
            {/*    <button className={'header__button button'}>Вход</button>*/}
            {/*</Link>*/}
        </header>
    )
}
export default Header;
