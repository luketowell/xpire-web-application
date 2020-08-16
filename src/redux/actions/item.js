import { USER_AUTH } from '../actionTypes';

export const authUser = () => {
    console.log("auth user action")
    return {
        type: USER_AUTH
    }
}