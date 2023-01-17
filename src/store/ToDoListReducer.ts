import { Action, ActionKind, ToDoStateType } from "@types";

export const ToDoListReducer = (state: ToDoStateType, action: Action): ToDoStateType => {
    const { type, payload } = action;

    switch (type) {
        case ActionKind.Edit: {
            return {
                ...state,
                items: state.items.map(x => ({
                    ...x,
                    title: x.id === payload.id ? payload.title : x.title
                }))
            };
        }
        case ActionKind.Remove: {
            return {
                ...state,
                // 1, 2, 3 => 2, 3
                items: state.items.filter(x => x.id !== payload)
            };
        }
        case ActionKind.Finish: {
            return {
                ...state,
                items: state.items.map(x => ({
                    ...x,
                    isDone: x.id === payload ? true : x.isDone
                }))
            };
        }
        case ActionKind.Revert: {
            return {
                ...state,
                items: state.items.map(x => ({
                    ...x,
                    isDone: x.id === payload ? false : x.isDone
                }))
            };
        }
        case ActionKind.Add: {
            return {
                ...state,
                items: [
                    {
                        // title: payload.title...
                        ...payload,
                    },
                    ...state.items
                ]
            };
        }
        default: {
            return state;
        }
    }
}

export const InitialToDoList: ToDoStateType = {
    items: []
}