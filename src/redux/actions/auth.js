import { USER_AUTH,
    GET_STORES_PENDING,
    GET_STORES_SUCCESS,
    GET_STORES_FAILED } from '../actionTypes';
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

        retrieveStores()
        .then(response => {
            dispatch({
                type:GET_STORES_SUCCESS,
                payload: response
            })
        })
        .catch(error=>{
            dispatch({
                type:GET_STORES_FAILED,
                payload: error
            })
        })

    } 
}

// functions
const retrieveStores = async () => {
    let url = "/store/all"
    let method = "GET"
    try {
        let response = await request(url, method, null)
        return response
    }
    catch(error){
        throw error
    }
}