import './Modal.css'
import LoginForm from "../LoginForma/LoginForm";
import {useContext} from "react";
import {AppContext} from "../../App";
import { useEffect } from 'react';

function Modal(){
    const {isVisible, setIsVisible} = useContext(AppContext)
    if(!isVisible) {
        document.body.style.overflow = 'unset';
        return null
    } else {
        document.body.style.overflow = 'hidden';
    }

    //  const useDisableBodyScroll = (isVisible) => {
    //     useEffect(() => {
    //         if (isVisible) {
    //             document.body.style.overflow = 'hidden';
    //         } else {
    //             document.body.style.overflow = 'unset';
    //         }
    //     }, [isVisible]);
    // };

    return(
        <div className={'modal'}>
            <LoginForm/>
            <useDisableBodyScroll/>
        </div>
    )
}
export default Modal;