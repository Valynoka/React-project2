import React, {useContext, useState} from "react";
import './LoginForm.css'
import {AppContext} from "../../App";
import axios from "axios";

function LoginForm() {
    const {setIsAuth, setIsVisible} = useContext(AppContext)
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    async function getUsers() {
        try {
            const response = await axios.get('http://localhost:8080/user')
            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }

    async function submitForm(e){
        e.preventDefault()
        const users = await getUsers()
        const user = users.find(item => item.login === login)
        if (!user) {
            return alert('Пользователь не зарегистрирован')
        }
        if(user.password !== password) {
            return alert('Пароль не совпадает')
        }
        setIsAuth(true)
        setIsVisible(false)
        return  alert('Вы молодец!')
    }
    return (
        <form onSubmit={submitForm} className={'loginForm wrapper__loginForm'}>
            <button className={'button__x'} onClick={() => setIsVisible(false)}></button>

            <h2 className={'loginForm__title'}>Вход</h2>
            <div className={'input loginForm__input'}>
                <label className={'input__lable'} htmlFor={'input-email'}>Email</label>
                <input className={'input__field'}
                       id={'input-email'}
                       type={'text'}
                       required
                       placeholder={'Введите email'}
                       value={login}
                       onChange={(event)=>setLogin(event.target.value)}
                />
            </div>
            <div className={'input loginForm__input'}>
                <label className={'input__lable'} htmlFor={'input-password'}>Пароль</label>
                <input className={'input__field'}
                       id={'input-password'}
                       required
                       placeholder={'Введите password'}
                       value={password}
                       onChange={(event)=>setPassword(event.target.value)}
                />
            </div>
            <button type='submit' className="button loginForm__button" id='button'>Войти</button>
        </form>
    )

}

export default LoginForm;
