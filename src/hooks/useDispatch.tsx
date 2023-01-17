import { useContext } from 'react';

import { ToDoContext } from '@contexts';
import { Action } from '@types';

export const useDispatch = (): React.Dispatch<Action> => {
    const { dispatch } = useContext(ToDoContext);

    return dispatch;
}