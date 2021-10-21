import { todoTypes } from "./todo.types";

const initialState = {
    todo: [],
    counter: 0,
};
export const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case todoTypes.ADD_ITEM_TODO:
            return { ...state, todo: [...state.todo, action.payload] };
        case todoTypes.REMOVE_ITEM_TODO:
            return {
                ...state,
                todo: state.todo.filter(
                    (item, index) => index !== action.payload
                ),
            };
        case todoTypes.COMPLETE_ITEM_TODO:
            return {
                ...state,
                todo: state.todo.map((item, index) => {
                    if (index === action.payload) {
                        item.status = "completed";
                        return item;
                    }
                    return item;
                }),
            };
        default:
            return state;
    }
};
