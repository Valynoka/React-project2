import React from "react";
import './Calc.css'

function Calc(){

    return(
        <form className={'calc-form wrapper__calc-form'}>

            <div className={'input calc-form__input'}>
                <label className={'input__lable'} htmlFor={'input-kg'}>Вес</label>
                <input className={'input__field'}
                       id={'input-email'}
                       type={'text'}
                       required
                       placeholder={'Введите вес'}
                       // value={login}
                       // onChange={(event)=>setLogin(event.target.value)}
                />
            </div>
            <div className={'input calc-form__input'}>
                <label className={'input__lable'} htmlFor={'input-v'}>Объем</label>
                <input className={'input__field'}
                       id={'input-v'}
                       required
                       placeholder={'Введите объем'}
                       // value={password}
                       // onChange={(event)=>setPassword(event.target.value)}
                />
            </div>
            <div className={'input calc-form__input'}>
                <label className={'input__lable'} htmlFor={'input-track'}>Расстояние</label>
                <input className={'input__track'}
                       min={2}
                       max={5000}
                       step={2}
                       type={'range'}
                       id={'input-track'}
                       required
                    //    placeholder={'Введите объем'}
                    // // value={password}
                    // onChange={(event)=>setPassword(event.target.value)}
                />
            </div>
            <div className={'calc-form__out'}>
                <span id={'out'}></span>
                <span className={'rub'}></span>
            </div>
            <button type='submit' className="button loginForm__button" id='button'>Результат</button>
        </form>
    )
}
export default Calc;