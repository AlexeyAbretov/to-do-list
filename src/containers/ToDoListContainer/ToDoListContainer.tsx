import React from 'react'

import { List } from '@components';
import { useDispatch, useSelector } from '@hooks';
import { ActionKind, ToDoListType } from '@types';

export const ToDoListContainer = () => {
    const items = useSelector<ToDoListType>((state) => state.items);
    const dispatch = useDispatch();

    return (
        <List
            items={items}
            onDone={(id) => dispatch({ type: ActionKind.Finish, payload: id })}
            onRemove={(id) => dispatch({ type: ActionKind.Remove, payload: id })}
            onRevert={(id) => dispatch({ type: ActionKind.Revert, payload: id })}
            onEdit={(id, title) => {
                const text = prompt('Введите новое название', title);

                if (text) {
                    dispatch({ type: ActionKind.Edit, payload: { id, title: text }});
                }
            }}
        />
    )
}
