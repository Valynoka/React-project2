import './Reviews.css'
import Swiper from "../Swiper/Swiper";
import TextInput from "../TextInput/TextInput";


function Reviews(){
    return(
        <>
            <h2 className={'reviews__title'}>Отзывы</h2>
            <Swiper/>
            <TextInput/>
        </>
    )
}
export default Reviews;