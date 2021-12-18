import React from "react";
import {Link} from "react-router-dom";

function Works(){
    return(
        <div className={'works__wrapper'}>
            <h2 className={'work__title'}>Доставка за 1 рубль</h2>
            <p className={'work__subtitle'}>Стоимость посылки зависит от ее веса и расстояния, которое ей предстоит "пройти"</p>
            <div className={'templates'}>
                <h3 className={'templates__title'}>Вы можете выбрать из готовых шаблонов</h3>
                <ul className={'templates__list'}>
                    <li className={'templates__item'}>
                        <img className={'templates__pic'} alt={'country'}/>
                        <h4 className={'templates__item-title'}>Москва - Германия</h4>
                        <p className={'templates__item-info'}>Вес посылки 2кг</p>
                        <p className={'templates__item-price'}>~4000р</p>
                        <Link className={'templates__item-link'} to = {'/'}>
                            <button className={'templates__button button'}>Выбрать</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Works;