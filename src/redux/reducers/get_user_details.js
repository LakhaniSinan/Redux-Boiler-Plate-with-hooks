import {
    USER_DETAILS,
    USER_DETAILS_EMPTY,
    USER_DETAILS_FULFILLED,
    USER_DETAILS_PENDING,
    USER_DETAILS_REJECTED
} from '../../constants/index';
import initialState from '../store/initialState';

export default (state = initialState.moviesData, action) => {
    switch (action.type) {
        case USER_DETAILS_PENDING:
            console.log("PENGINGGG")
            return {
                loading: true,
                response: {},
                error: {}
            }
            break;
        case USER_DETAILS_FULFILLED:
            console.log("USER_DETAILS_FULFILLED")
            return {
                loading: false,
                response: action.payload,
                error: {}
            }
            break;
        case USER_DETAILS_REJECTED:
            console.log("USER_DETAILS_REJECTED")
            return {
                loading: false,
                response: {},
                error: action.payload
            }
            break;
        case USER_DETAILS_EMPTY:
            console.log("USER_DETAILS_EMPTY")
            return {
                loading: false,
                response: action.payload,
                error: {}
            }
            break;
        default:
            return state;
    }

}
