export const SORT_BY = '[sort] SORT_BY'


export default function sortBy(by) {
    return {
        type:SORT_BY,
        payload: by
    }
}
