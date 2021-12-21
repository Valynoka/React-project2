
import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import './Management.css'



function Management() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://reqres.in/api/users?per_page=12').then((response) => {
            const allUsers = response.data.data;
            setUsers(allUsers);
        });
    }, [setUsers]);
    return (
        <>
            {users.map((item) =>
                <ul className = {'users__list'} key={item.id}>
                    {/*<li>{item.id}</li>*/}
                    <Link className = {'users__link'} to = {`${item.id}`}>
                        <li className = {'users__item'}>{item.first_name}</li>
                        <li className = {'users__item'}>{item.last_name}</li>
                    </Link>
                    {/*<li>{item.email}</li>*/}
                    {/*<li>{item.avatar}</li>*/}
                </ul> )}
        </>
    )
}

export default Management;