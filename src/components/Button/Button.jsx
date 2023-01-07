import React from 'react';

import { AddIcon, DoneIcon, RemoveIcon, EditIcon, RevertIcon } from './images';

import styles from './Button.css';

const Images = {
    add: AddIcon,
    done: DoneIcon,
    remove: RemoveIcon,
    edit: EditIcon,
    revert: RevertIcon
}

// type - add, remove, edit, done, revert
export const Button = ({ title, type, onClick, isDisabled }) => {
    const Icon = Images[type] || AddIcon;

    return (
        <div title={title} onClick={onClick} className={`${styles.Button} ${isDisabled ? styles.Button_disabled : ''}`}>
            <Icon />
        </div>
    )
}