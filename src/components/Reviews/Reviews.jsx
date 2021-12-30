// import './Reviews.module.css'
import Swiper from "../Swiper/Swiper";
import TextInput from "../TextInput/TextInput";
import classes from './Reviews.module.css'
import {AppContext} from "../../App";
import React, {useContext} from "react";

function Reviews() {
    const {isAuth} = useContext(AppContext)
    return (
        <>
            <h2 className={classes['reviews__title']}>Отзывы</h2>
            <Swiper/>
            {isAuth && <TextInput/>}
        </>
    )
}

export default Reviews;
