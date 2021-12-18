import './Modal.css'
import LoginForm from "../LoginForma/LoginForm";
import {useContext} from "react";
import {AppContext} from "../../App";


function Modal(){
    const {isVisible, setIsVisible} = useContext(AppContext)
    if(!isVisible) {
        return null

    }
    return(
        <div className={'modal'}>
            <LoginForm/>
        </div>
    )
}
export default Modal;