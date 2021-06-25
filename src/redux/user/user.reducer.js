import { SET_USER_ACTION } from "../config";

const INITIAL_STATE = {
    currentUser: null,
};

const userReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER_ACTION:
            return {
                ...currentState,
                currentUser: action.payload,
            };

        default:
            return currentState;
    }
};

export default userReducer;
