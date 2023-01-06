import React, { useReducer } from 'react';

import { ToDoContext } from '@contexts';

import styles from './App.css';

const ToDoListReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        // dispatch({ type: 'EDIT', payload: { id: 1, title: 'Buy koshka korm' } })
        case 'EDIT': {
            return {
                ...state,
                items: state.items.map(x => ({
                    ...x,
                    title: x.id === payload.id ? payload.title : x.title
                }))
            };
        }
        // dispatch({ type: 'REMOVE', payload: 1 })
        case 'REMOVE': {
            return {
                ...state,
                // 1, 2, 3 => 2, 3
                items: state.items.filter(x => x.id !== payload)
            };
        }
        // dispatch({ type: 'FINISH', payload: 1 })
        case 'FINISH': {
            return {
                ...state,
                items: state.items.map(x => ({
                    ...x,
                    isDone: x.id === payload ? true : x.isDone
                }))
            };
        }
        // dispatch({ type: 'ADD', payload: { title: 'Buy popuga korm', id: 1, isDone: false } })
        case 'ADD': {
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

const InitialToDoList = {
    // список дел
    // { title: 'Buy popuga korm', id: 1, isDone: false }
    items: []
}

export const App = () => {
    const [state, dispatch] = useReducer(ToDoListReducer, InitialToDoList);

    return (
        <ToDoContext.Provider value={{
            state,
            dispatch
        }}>
            <div className={styles.App}>I am to-do-list</div>
        </ToDoContext.Provider>
    )
}
