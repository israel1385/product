export const CORRENT_POST = 'CORRENT_POST'

export default function correntPosts(correntPost) {
    return {
        type:CORRENT_POST,
        payload: correntPost
    }
}

