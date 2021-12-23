import './Swiper.css'
import {useContext, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import avatar from '../Img/avatar.png'


// import Swiper core and required modules
import SwiperCore, {
    Mousewheel, Pagination
} from 'swiper';
import "swiper/css/pagination"

import {AppContext} from "../../App";
import axios from "axios";
// install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);


function SwiperSlider() {
    const {slides, setSlides} = useContext(AppContext)

    if (!slides.length) {
        return (
            <div className={'slides__loading'}>Скоро вы увидите восторженные комментарии...</div>
        )
    }

    // const deletePost = (id) => {
    //     console.log('id', id)
    //     axios.delete('http://localhost:8080/post/id')
    // }


    async function deletePost(post) {
        try {
            await axios.delete('http://localhost:8080/post/id', post)
        } catch (e) {
            console.log(e)
        }
    }


    // const deletePost = (id) => {
    //     const newArray = axios.delete(`http://localhost:8080/post/${id}`)
    //     setSlides(newArray)
    //     } //удаляет только после перезагрузки


    // function deletePost(id){
    //     const idx = slides.findIndex((c)=> c.id === id); //найдем индекс
    //     const newArr = [// Сформируем новый массив с новыми значениями
    //         ...slides.slice(0,idx),// значения до индекса
    //         ...slides.slice(idx + 1)// значения после индекса
    //     ];
    //     return(
    //         setSlides(newArr)
    //     )
    //
    // }
    // const deletePost = (id) => {
    //     const newArr = slides.filter(item => item.id !== id)
    //     setSlides(newArr)
    // }



    return (

        <Swiper direction={'vertical'} slidesPerView={1} spaceBetween={30} mousewheel={true} pagination={{
            "clickable": true
        }} className={'swiper'}>
            {/*<createPost slides = {slides} setSlides ={setSlides} />*/}
            {
                slides.map((item) => {
                    return (
                        <div className={'swiper-wrapper'} key={item.id}>

                            <SwiperSlide className={'swiper-slide'}>
                                <button className={'button__x'} onClick={()=>deletePost(item.id)} ></button>
                                <img className={'slide__ava'} src={avatar} alt={'avatar'}/>
                                <p className={'slide__name'}>{item.name}</p>
                                <p className={'slide__lastname'}>{item.lastname}</p>
                                <p className={'slide__text'}>{item.text}</p>
                            </SwiperSlide>
                        </div>
                    )
                })
            }
        </Swiper>
    )


}

export default SwiperSlider
