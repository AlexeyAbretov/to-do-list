import { useContext } from 'react';

import { ToDoContext } from '@contexts';

export const useSelector = (selector) => {
    const { state } = useContext(ToDoContext);

    return selector(state);
}