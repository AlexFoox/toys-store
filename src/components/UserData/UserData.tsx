import React, {useEffect, useState} from "react";
import {getFullName, getRandomUserName} from "../../services/user-service";
import {nameType, userDataType, userNameType} from "../../types/users";
import './UserData.css'

const UserData = () => {
    const [titleName, setTitleName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [user, setUser] = useState<nameType>(
        {
            title: "",
            first: "",
            last: ""
        }
    );

    useEffect(() => {
   (async() => { setUser((await getFullName()) as nameType);})()
    }, []);

    useEffect(() => {
   (async() => {
            const userFullName : userDataType| undefined = await getRandomUserName();
            setTitleName(userFullName!.results[0].name.title);
            setFirstName(userFullName!.results[0].name.first);
            setLastName(userFullName!.results[0].name.last);
        })()
    }, []);

    return (
        <div className={"fullName"}>
            <p>{titleName} {firstName} {lastName}</p>
            <h1>{`${user.first}`}</h1>
        </div>
    );
}

export default UserData