import React, {useEffect, useState} from "react";
import './TextInput.css'
import {customAlphabet} from "nanoid";
import data from "../Data/Data";



const nanoid = customAlphabet('1234567890', 10)

function TextInput() {
    const[post, setPost] =  useState([]);
    // const[slides, setSlides] =  useState([]);

    const[name, setName] =  useState([]);
    const[lastname, setLastname] =  useState([]);
    const[text, setText] =  useState([]);

    useEffect(()=> {
        const response = data
        setPost(response);
    }, [setPost]);


    const createPost = (e) =>{
        e.preventDefault()
        console.log("name",name)
        console.log("lastname",name)
        console.log("text",text)
        const newPost = {
            id:Number(nanoid()),
            name: name,
            lastname: lastname,
            text: text
        }
        // setPost(prevState => [...prevState, newPost])

        data.push(newPost)
        // const response = data
        // setPost(response)
    }


    return (
        <form onSubmit={createPost} className={'text-input wrapper__text-input'}>

            <div className={'input text-input__input'}>
                <div className={'input__personalNames'}>
                    <input className={'input__field'}
                           type={'text'}
                           required
                           placeholder={'Ваше Имя'}
                           value={name}
                           onChange={(event) => setName(event.target.value)}

                    />
                    <input className={'input__field'}
                           type={'text'}
                           required
                           placeholder={'Ваша Фамилия'}
                           value={lastname}
                           onChange={(event) => setLastname(event.target.value)}
                    />
                </div>

                <textarea className={'input__text'}
                    // type={'text'}
                          required
                          placeholder={'Оставьте Ваш отзыв'}
                          value={text}
                          onChange={(event) => setText(event.target.value)}
                />
            </div>
            <button className="button text-input__button" id='button' type={'submit'}>Отправить</button>
            <button className="button text-edit__button" id='button-edit'>Изменить</button>
            <button className="button text-del__button" id='button-del'>Удалить отзыв</button>
        </form>
    )
}

export default TextInput;