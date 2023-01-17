
import { ToDoContextType } from '@types';
import React from 'react';

export const ToDoContextInitialValues: ToDoContextType = {
    state: {
        items: []
    },
    dispatch: () => { },
}

export const ToDoContext = React.createContext(ToDoContextInitialValues);
