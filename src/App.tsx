import React, { useReducer } from 'react';

import { ToDoContext } from '@contexts';
import { AddInputContainer, ToDoListContainer } from '@containers';
import { ToDoListReducer, InitialToDoList } from '@store';

import styles from './App.css';

export const App = () => {
    const [state, dispatch] = useReducer(ToDoListReducer, InitialToDoList);

    return (
        <ToDoContext.Provider value={{
            state,
            dispatch
        }}>
            <div className={styles.App}>
                <AddInputContainer />
                <ToDoListContainer />
            </div>
        </ToDoContext.Provider>
    )
}
