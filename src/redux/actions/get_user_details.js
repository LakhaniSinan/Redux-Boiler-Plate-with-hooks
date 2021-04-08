import {
    USER_DETAILS,
} from '../../constants/index';
import { get_user_details } from '../../api/get_user_details';

export const get_user_details_action = (params) => ({
    type: USER_DETAILS,
    payload: get_user_details(params),
});
