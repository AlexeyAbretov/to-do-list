import React, { useContext } from 'react';

import { AddInput } from '@components';
import { useDispatch } from '@hooks';

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

export const AddInputContainer = () => {
    const dispatch = useDispatch();

    return (
        <AddInput onAdd={(value) => dispatch({ type: 'ADD', payload: { title: value, isDone: false, id: uuidv4() } })} />
    )
}
