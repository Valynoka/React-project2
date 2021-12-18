import React from "react";
import Illustration from '../Img/Illustration.png'
import './StartPage.css'

function StartPage (){
    return(
        <div className={'startPage__wrapper'}>
            <div className={'startPage__text'}>
                <h1 className={'startPage__title'}>Предоставьте доставку нам!</h1>
                <p className={'startPage__subtitle'}>Доставим быстро, качественно и в любую точку мира. Вы отхаете - мы думаем!</p>
                <form className={'startPage__form'}>
                    <label className={'startPage__label'}>
                        <input type={'text'} className={'startPage__input'} placeholder={'Вопросы'}/>
                        <button className={'startPage__button button'}>Отправить</button>
                    </label>
                </form>
            </div>
            <div className={'startPage__visual'}>
                <img className={'startPage__pic'} src={Illustration} alt={'men'}/>
            </div>

        </div>
    )
}
export default StartPage;