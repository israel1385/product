export const  PRODUCT_CHANGE = '[ PRODUCT_CHANGE]  PRODUCT_CHANGE'


export default function change(item) {
    return {
        type: PRODUCT_CHANGE,
        payload: item
    }
}
