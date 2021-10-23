import { todoTypes } from "./todo.types";

export const addTodoAction = (todoData) => {
    return {
        type: todoTypes.ADD_ITEM_TODO,
        payload: todoData,
    };
};
export const removeTodoAction = (taskId) => {
    return {
        type: todoTypes.REMOVE_ITEM_TODO,
        payload: taskId,
    };
};
export const completeTodoTask = (taskId) => {
    return {
        type: todoTypes.COMPLETE_ITEM_TODO,
        payload: taskId,
    };
};
