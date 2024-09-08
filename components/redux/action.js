import {ADD_TO_CART, REMOVE_FROM_CART, USER_LIST} from './constants'

export const addTocart = (item) =>{
    return{
        type: ADD_TO_CART, 
        data: item
    }
} 
export const removeFromCart = (item) => {
    return{
        type: REMOVE_FROM_CART,
        data: item
    }
}
export const getUserList= () => {
    return {
        type: USER_LIST
    }
}