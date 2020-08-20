import { USER_AUTH,
    GET_STORES_PENDING,
    GET_STORES_SUCCESS,
    GET_STORES_FAILED, 
    SET_CHOSEN_STORE} from '../actionTypes';
import request from '../../utils/request';

export const authUser = () => {
    console.log("auth user action")
    return {
        type: USER_AUTH
    }
}


export const getStores = () => {
    console.log("Retrieving stores from the database")
    return (dispatch) => {
        dispatch({
            type:GET_STORES_PENDING
        });
        request("/store/all","GET")
        .then(response => {
            dispatch({
                type:GET_STORES_SUCCESS,
                payload: response
            })
        })
        .catch(error=>{
            console.log(error)
            dispatch({
                type:GET_STORES_FAILED,
                payload: error
            })
        })

    } 
}

export const setChosenStore = (store) => {
    return ({
        type: SET_CHOSEN_STORE,
        payload: store.value
    })
}