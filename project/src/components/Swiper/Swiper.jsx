import './Swiper.css'
import { useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import data from "../Data/Data";
import avatar from '../Img/avatar.png'
// import TextInput from "../TextInput/TextInput";



// import Swiper core and required modules
import SwiperCore, {
    Mousewheel,Pagination
} from 'swiper';
import "swiper/css/pagination"
// install Swiper modules
SwiperCore.use([Mousewheel,Pagination]);



function SwiperSlider(){

    const[slides, setSlides] =  useState([]);
    useEffect(()=> {
        const response = data
        setSlides(response);
    }, []);


    if (!slides) {
        return(
            <div className={'slides__loading'}>Скоро вы увидите восторженные комментарии...</div>
        )
    }

    return (

        <Swiper direction={'vertical'} slidesPerView={1} spaceBetween={30} mousewheel={true} pagination={{
            "clickable": true
        }} className={'swiper'}>
            {
                slides.map((item) => {
                    return (
                        <div className={'swiper-wrapper'} key={item.id}>
                            <SwiperSlide className={'swiper-slide'}>
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
