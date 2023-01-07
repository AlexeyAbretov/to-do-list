import React from 'react';
import { Button } from '../Button';

import styles from './List.css';

// items = { id, title, isDone }
export const List = ({ items, onRemove, onEdit, onDone, onRevert }) => {
    return (
        <div className={styles.List}>
            {items?.map((x) => <div key={x.id} className={styles.ListItem}>
                <div className={`${x.isDone ? styles.ListItem_done : ''}`}>{x.title}</div>
                <div>
                    {!x.isDone && <Button title="Редактировать" type="edit" onClick={() => onEdit?.(x.id, x.title)} />}
                    {!x.isDone && <Button title="Завершить" type="done" onClick={() => onDone?.(x.id)} />}
                    {x.isDone && <Button title="Вернуть" type="revert" onClick={() => onRevert?.(x.id)} />}
                    <Button title="Удалить" type="remove" onClick={() => onRemove?.(x.id)} />
                </div>
            </div>)}
        </div>
    )
}