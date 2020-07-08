export const SELECT_ITEM = '[SELECTE_ITEM] SELECTE_ITEM'


export default function selectItem(item) {
    return {
        type: SELECT_ITEM,
        payload: item
    }
}
