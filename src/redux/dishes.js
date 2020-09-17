import * as ActionTypes from '../redux/ActionTypes';

export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return { ...state, isLoading: false, errMess: null, dishes: action.paylode };

        case ActionTypes.DISHES_LOADING:
            return { ...state, isLoading: true, errMess: null, dishes: [] };

        case ActionTypes.DISHES_FAILED:
            return { ...state, isLoading: false, errMess: action.paylode, dishes: [] };

        default:
            return state;
    }
}