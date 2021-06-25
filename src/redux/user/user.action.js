import { SET_USER_ACTION } from "../config";

export const setCurrentUser = user => ({
    type: SET_USER_ACTION,
    payload: user,
});
