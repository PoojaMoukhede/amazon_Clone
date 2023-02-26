
const initialState = {
    projectLoader: false,
    error: "",
    data: "",
    basket: [],
    user: null,
};

export const cartReducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload,

            };
        case "LOGOUT_USER":
            return {
                ...state,
                user: "",

            };
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.payload]

            };
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: [],

            };
        case "REMOVE_FROM_BASKET":
            return {
                ...state,
                basket: action.payload,

            };
        default:
            return state;
    }
};