export const CREATE_PRODUCTS = 'CREATE_PRODUCTS'

export default function createProduct(products) {
    return {
        type:CREATE_PRODUCTS,
        payload: products
    }
}
// export const CORRENT_POST = 'CORRENT_POST'
// export default function createProduct(correntPost) {
//     return {
//         type:CORRENT_POST,
//         payload: correntPost
//     }
// }
