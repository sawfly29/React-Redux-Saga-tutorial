import { HIDE_ALERT, HIDE_LOADER, SHOW_LOADER, SHOW_ALERT } from "./types";

const initialState = {
    loading: false,
    alert: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true};
        case HIDE_LOADER:
            return {...state, loading: false};
        case HIDE_ALERT:
            return {...state, alert: null};
        case SHOW_ALERT:
            return {...state, alert: this.state.app.alert};
        default:
            return state;
    }

}