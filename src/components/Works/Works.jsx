import React from "react";
import Calc from '../Calc/Calc'
import './Works.css'


import Templates from "../Templates/Templates";


function Works() {
    return (
        <div className={'works__wrapper'}>
            <h2 className={'works__title'}>Доставка за 1 рубль</h2>
            <p className={'works__subtitle'}>Стоимость посылки зависит от ее веса и расстояния, которое ей предстоит
                "пройти"</p>
            <Calc/>
            <Templates/>
        </div>
    )
}

export default Works;