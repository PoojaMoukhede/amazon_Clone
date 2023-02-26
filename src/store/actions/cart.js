export const loginUser = (data) => {
    return {
        type: "LOGIN_USER",
        payload: data,
    };
};
export const logoutUser = () => {
    return {
        type: "LOGOUT_USER",
    };
};
export const addToBasket = (data) => {
    return {
        type: "ADD_TO_BASKET",
        payload: data,
    };
};
export const emptyBasket = (data) => {
    return {
        type: "EMPTY_BASKET",
        payload: data,
    };
};
export const removeFromBasket = (data) => {
    return {
        type: "REMOVE_FROM_BASKET",
        payload: data,
    };
};
