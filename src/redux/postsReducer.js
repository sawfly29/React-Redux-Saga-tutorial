import {CREATE_POST} from './types'
const initialState = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: [...state.posts, action.payload]};
            //return {...state, posts: state.posts.concat(action.payload)};
            //получили новый экшн, по нему вернули предыдущий стейт и добавили пэйлоад (нове данные)
    
        default:
            return state;
    }


    
}