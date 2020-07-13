
import { combineReducers } from 'redux'
import { CREATE_PRODUCTS } from '../action'
import { CORRENT_POST } from '../action/correntPost.action'
import { SORT_BY } from '../action/sort.action'
import { DELETE_PRODUCT } from '../action/delete.action'
import { SELECT_ITEM } from '../action/selectedItem.action'
import { PRODUCT_CHANGE } from '../action/productChange.action'
import { CREATE_ITEM } from '../action/createItem.actionn'
import { ITEM_CLIKED } from '../action/itemCliked.action'
import _ from 'lodash';
import productss from '../product.json'
import { DELETE } from '../action/delete.action'

const initialState = {
    products: productss,
    selectedItem: null,
    ProductChang: false
};
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PRODUCTS:
            const objects = state.products.slice()
            objects.push(action.payload);
            objects.map((item, index) => item.index = index)
            const result = { ...state, products: objects }
            return result;
        case SORT_BY:
            const newArr = state.products.slice()
            console.log(action.payload);

            newArr.sort((a, b) => {
                return a[action.payload] > b[action.payload] ? 1 : -1;
            })
            return { ...state, products: newArr }
        case DELETE_PRODUCT:
            const newArr1 = state.products.slice()
            newArr1.splice(action.payload, 1)
            newArr1.map((item, index) => item.index = index)
            const res = { ...state, products: newArr1, selectedItem: null }
            return res
        case SELECT_ITEM:
            const a = state.products.slice()
            return { ...state, selectedItem: action.payload }
        case PRODUCT_CHANGE:
            const oldProduct = state.products.slice()
            oldProduct[action.payload.index] = action.payload
            return { ...state, products: oldProduct }
        case CREATE_ITEM:
            return { ...state, selectedItem: null }
        case ITEM_CLIKED:
            return { ...state, selectedItem: null }
        default:
            return state;
    }
}

const correntPosts = (state = [], action) => {
    switch (action.type) {
        case CORRENT_POST:
            return [...state, action.payload]
        default:
            return state;
    }
}
export default combineReducers({
    products: productReducer,
    correntPosts: correntPosts
})