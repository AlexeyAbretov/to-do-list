import React, { SVGProps } from 'react';

import { AddIcon, DoneIcon, RemoveIcon, EditIcon, RevertIcon } from './images';

import styles from './Button.css';

type ButtonType =  'add' | 'remove' | 'edit' | 'done' | 'revert';

const Images: {
    [key in ButtonType]: React.FC<SVGProps<SVGSVGElement>>
} = {
    'add': AddIcon,
    'done': DoneIcon,
    'remove': RemoveIcon,
    'edit': EditIcon,
    'revert': RevertIcon
}

export const Button: React.FC<{
    title: string;
    type: ButtonType;
    onClick: () => void;
    isDisabled?: boolean;
}> = ({ title, type, onClick, isDisabled }): JSX.Element => {
    const Icon = Images[type] || AddIcon;

    return (
        <div
            title={title}
            onClick={onClick}
            className={`${styles.Button} ${isDisabled ? styles.Button_disabled : ''}`}
        >
            <Icon />
        </div>
    )
}