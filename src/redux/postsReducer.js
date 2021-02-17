import {CREATE_POST, FETCHED_POST} from './types'
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
        case FETCHED_POST:
            return{...state, fetchedPosts: action.payload};
        default:
            return state;
    }


    
}