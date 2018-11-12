import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
import axios from 'axios';

export const getItems = () => dispatch => {
    return {
        type: GET_ITEMS
    }
};

export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
};

export const addItem = newItem => {
    return {
        type: ADD_ITEM,
        payload: newItem
    }
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
};