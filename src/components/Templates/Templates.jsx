import React from "react";
import Berlin from "../Img/Berlin.png";
import {Link} from "react-router-dom";
import Paris from "../Img/Paris.png";
import Osaka from "../Img/Osaka.png";
import Ottawa from "../Img/Ottawa.png";
import London from '../Img/London.png';
import Roma from "../Img/Roma.png";
import './Templates.css'

function Templates(){
    return(
        <div className={'templates'}>
            <h3 className={'templates__title'}>Вы можете выбрать из готовых шаблонов</h3>
            <ul className={'templates__list'}>
                <li className={'templates__item'}>
                    <img className={'templates__pic'} src={Berlin} alt={'country'}/>
                    <h4 className={'templates__item-title'}>Берлин</h4>
                    <p className={'templates__item-info'}>Вес посылки 2кг</p>
                    <p className={'templates__item-price'}>~4000р</p>
                    <Link className={'templates__item-link'} to={'/'}>
                        <button className={'templates__button button'}>Выбрать</button>
                    </Link>
                </li>
                <li className={'templates__item'}>
                    <img className={'templates__pic'} src={Paris} alt={'country'}/>
                    <h4 className={'templates__item-title'}>Париж</h4>
                    <p className={'templates__item-info'}>Вес посылки 2кг</p>
                    <p className={'templates__item-price'}>~4000р</p>
                    <Link className={'templates__item-link'} to={'/'}>
                        <button className={'templates__button button'}>Выбрать</button>
                    </Link>
                </li>
                <li className={'templates__item'}>
                    <img className={'templates__pic'} src={Osaka} alt={'country'}/>
                    <h4 className={'templates__item-title'}>Осака</h4>
                    <p className={'templates__item-info'}>Вес посылки 2кг</p>
                    <p className={'templates__item-price'}>~4000р</p>
                    <Link className={'templates__item-link'} to={'/'}>
                        <button className={'templates__button button'}>Выбрать</button>
                    </Link>
                </li>
                <li className={'templates__item'}>
                    <img className={'templates__pic'} src={Ottawa} alt={'country'}/>
                    <h4 className={'templates__item-title'}>Оттава</h4>
                    <p className={'templates__item-info'}>Вес посылки 2кг</p>
                    <p className={'templates__item-price'}>~4000р</p>
                    <Link className={'templates__item-link'} to={'/'}>
                        <button className={'templates__button button'}>Выбрать</button>
                    </Link>
                </li>
                <li className={'templates__item'}>
                    <img className={'templates__pic'} src={London} alt={'country'}/>
                    <h4 className={'templates__item-title'}>Лонднон</h4>
                    <p className={'templates__item-info'}>Вес посылки 2кг</p>
                    <p className={'templates__item-price'}>~4000р</p>
                    <Link className={'templates__item-link'} to={'/'}>
                        <button className={'templates__button button'}>Выбрать</button>
                    </Link>
                </li>
                <li className={'templates__item'}>
                    <img className={'templates__pic'} src={Roma} alt={'country'}/>
                    <h4 className={'templates__item-title'}>Рим</h4>
                    <p className={'templates__item-info'}>Вес посылки 2кг</p>
                    <p className={'templates__item-price'}>~4000р</p>
                    <Link className={'templates__item-link'} to={'/'}>
                        <button className={'templates__button button'}>Выбрать</button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default Templates;