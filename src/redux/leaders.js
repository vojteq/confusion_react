import * as ActionTypes from '../redux/ActionTypes';

export const Leaders = (state = {
    isLoading: true,
    errMess: null,
    leaders: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return { ...state, isLoading: false, errMess: null, leaders: action.paylode };

        case ActionTypes.LEADERS_LOADING:
            return { ...state, isLoading: false, errMess: null, leaders: [] };

        case ActionTypes.LEADERS_FAILED:
            return { ...state, isLoading: false, errMess: action.paylode, leaders: [] };

        default:
            return state;
    }
}