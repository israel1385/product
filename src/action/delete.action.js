export const DELETE_PRODUCT = '[DELETE] DELETE_PRODUCT'


export default function deleteProduct(productdelete) {
    return {
        type:DELETE_PRODUCT,
        payload: productdelete
    }
}
