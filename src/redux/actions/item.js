import { USER_AUTH, GET_CATEGORIES_PENDING, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILED } from '../actionTypes';
import request from '../../utils/request';

export const authUser = () => {
    return {
        type: USER_AUTH
    }
}

export const getCategories = () => {
    return (dispatch) => {
        dispatch({
            type:GET_CATEGORIES_PENDING
        })
        this.getCategoriesRequest()
        .then((response) => {
            dispatch({
                type:GET_CATEGORIES_SUCCESS,
                payload: response
            })
            
        })
        .catch((error) => {
            dispatch({
                type:GET_CATEGORIES_FAILED,
                payload: error
            })
        })
    }
}

const getCategoriesRequest = async () => {
    let url = "/itemcategories/all"
    let method = "POST"
    try {
        let response = await request(url, method, null)
        return response
    }
    catch(error){
        throw error
    }
}