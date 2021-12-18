import {useEffect, useState} from "react";
import './Slider.css'
import data from "../Data/Data";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/bundle'



function Slider(){
    const [sliders, setSliders] = useState([]);
    useEffect(()=>{
        const response = data
        setSliders(response);
    },[]);

    return (
        <Swiper className={'swiper'}>
            {sliders.map((slider)=>{
                return(
                    <SwiperSlide className={'slider'} key={slider.id}>
                        <p className ={'slider__item-name'}>{slider.name}</p>
                        <p className = {'slider__item-lastname'}>{slider.lastname}</p>
                        <p className = {'slider__item-text'}>{slider.text}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )



    // return (
    //     <Swiper className={'swiper'}>
    //         <ul className={'slider__list swiper'}>
    //             {sliders.map((slider)=>{
    //                 return(
    //                     <li className={'slider__item swiper-slide'} key={slider.id}>
    //                         <p className ={'slider__item-name'}>{slider.name}</p>
    //                         <p className = {'slider__item-lastname'}>{slider.lastname}</p>
    //                         <p className = {'slider__item-text'}>{slider.text}</p>
    //                     </li>
    //                 )
    //             })}
    //         </ul>
    //     </Swiper>
    //
    // )

}



export default Slider;
