import axios from "axios";
import {nameType, userDataType, userNameType} from "../types/users";


export async function getRandomUserName():Promise<userDataType| undefined> {
    try {
        const response = await axios.get<userDataType>('https://randomuser.me/api/')
        const data = response.data;
        console.log("data : ", data)
        return data;
    } catch (error) {
        console.error(error);
    }
}
export async function getFullName():Promise<nameType| undefined> {
    try {
        const response = await axios.get<userDataType>('https://randomuser.me/api/')
        const fullN = response.data.results[0].name;
        console.log("fullN : ", fullN)
        return fullN;
    } catch (error) {
        console.error(error);
    }
}
