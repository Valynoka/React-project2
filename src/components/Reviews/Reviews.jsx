// import './Reviews.module.css'
import Swiper from "../Swiper/Swiper";
import TextInput from "../TextInput/TextInput";
import classes from './Reviews.module.css'

function Reviews() {
    return (
        <>
            <h2 className={classes['reviews__title']}>Отзывы</h2>
            <Swiper/>
            <TextInput/>
        </>
    )
}

export default Reviews;
