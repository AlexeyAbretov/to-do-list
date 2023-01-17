import { useContext } from 'react';

import { ToDoContext } from '@contexts';
import { ToDoStateType } from '@types';
 
export const useSelector = <T, >(selector: (state: ToDoStateType) => T): T => {
    const { state } = useContext(ToDoContext);

    return selector(state);
}