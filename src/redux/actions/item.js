import { FIND_ITEM_PENDING } from '../actionTypes';
import request from '../../utils/request';
import displayCurrentStore from '../../utils/currentStore';

export const findProductInformation = (ItemNumber) => {
    return {
        type: FIND_ITEM_PENDING,
        payload: ItemNumber,
    };
};
