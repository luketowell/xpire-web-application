import { USER_AUTH } from '../constants';

export const authUser = () => {
    console.log("auth user action")
    return {
        type: USER_AUTH
    }
}