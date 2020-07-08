export const  ITEM_CLIKED = '[ ITEM_CLIKED]  ITEM_CLIKED'

export default function itemClked(item) {
    return {
        type: ITEM_CLIKED,
        payload: item
    }
}
