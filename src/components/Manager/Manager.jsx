import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import './Mabager.css'


function Manager() {
    const {userId} = useParams();
    const [manager, setManager] = useState();
    useEffect(() => {
        axios.get(`https://reqres.in/api/users?id=${userId}`).then((response) => {
            const currentManager = response.data.data;
            setManager(currentManager);
        });
    }, []);

    if (!manager) {
        return (
            <div className={'user__loading'}>Loading...</div>
        )
    }

    const {avatar, email, first_name, last_name} = manager

    return (
        <div>
            <h3 className={'manager__title'}>Менеджер: {userId} </h3>
            <img className={'manager__photo'} src={avatar} alt="avatar"/>
            <p className={'manager__text'}>email: {email}</p>
            <p className={'manager__text'}> Name: {first_name}</p>
            <p className={'manager__text'}> Lastname: {last_name}</p>
        </div>
    )
}


export default Manager;
