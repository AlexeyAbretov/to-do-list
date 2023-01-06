import React from 'react';

import { AddIcon, DoneIcon, RemoveIcon, EditIcon } from './images';

import styles from './Button.css';

const Images = {
    add: AddIcon,
    done: DoneIcon,
    remove: RemoveIcon,
    edit: EditIcon,
}

// type - add, remove, edit, done
export const Button = ({ title, type, onClick, isDisabled }) => {
    const Icon = Images[type] || AddIcon;

    return (
        <div title={title} onClick={onClick} className={`${styles.Button} ${isDisabled ? styles.Button_disabled : ''}`}>
            <Icon />
        </div>
    )
}