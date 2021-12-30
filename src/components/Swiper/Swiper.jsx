import './Swiper.css'
import {useContext, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import avatar from '../Img/avatar.png'


// import Swiper core and required modules
import SwiperCore, {Mousewheel, Pagination} from 'swiper';
import "swiper/css/pagination"

import {AppContext} from "../../App";
import axios from "axios";
import {deletePost, getSlides} from "../../api";
// install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);


function SwiperSlider() {
    const {isAuth} = useContext(AppContext)
    const {slides, setSlides} = useContext(AppContext)

    useEffect(() => {
        getSlides().then((res)=> setSlides(res))
    }, []);

    if (!slides.length) {
        return (
            <div className={'slides__loading'}>Скоро вы увидите восторженные комментарии...</div>
        )
    }

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
                                {isAuth && <button className={'button__x'} onClick={() => deletePost(item.id, setSlides)}></button>}
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
