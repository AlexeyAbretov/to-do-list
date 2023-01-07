import { useContext } from 'react';

import { ToDoContext } from '@contexts';

export const useDispatch = () => {
    const { dispatch } = useContext(ToDoContext);

    return dispatch;
}