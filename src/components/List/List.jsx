import React from 'react';
import { Button } from '../Button';

import styles from './List.css';

// items = { id, title, isDone }
export const List = ({ items, onRemove, onEdit, onDone }) => {
    return (
        <div className={styles.List}>
            {items?.map((x) => <div key={x.id} className={styles.ListItem}>
                <div className={`${x.isDone ? styles.ListItem_done : ''}`}>{x.title}</div>
                <div>
                    <Button title="Редактировать" type="edit" onClick={() => onEdit?.(x.id)} isDisabled={x.isDone} />
                    <Button title="Завершить" type="done" onClick={() => onDone?.(x.id)} isDisabled={x.isDone}/>
                    <Button title="Удалить" type="remove" onClick={() => onRemove?.(x.id)} isDisabled={x.isDone}/>
                </div>
            </div>)}
        </div>
    )
}