
import React from 'react';

export const ToDoContextInitialValues = {
    state: {
        items: []
    },
    dispatch: () => { },
}

export const ToDoContext = React.createContext(ToDoContextInitialValues);
