import React from 'react'

import { List } from '@components';
import { useDispatch, useSelector } from '@hooks';

export const ToDoListContainer = () => {
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();

    return (
        <List
            items={items}
            onDone={(id) => dispatch({ type: 'FINISH', payload: id })}
            onRemove={(id) => dispatch({ type: 'REMOVE', payload: id })}
            onRevert={(id) => dispatch({ type: 'REVERT', payload: id })}
            onEdit={(id, title) => {
                const text = prompt('Введите новое название', title);

                if (text) {
                    dispatch({ type: "EDIT", payload: { id, title: text }});
                }
            }}
        />
    )
}
