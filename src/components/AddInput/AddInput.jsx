import React, { useState } from 'react';
import { Button } from '../Button';

import styles from './AddInput.css';

export const AddInput = ({ onAdd }) => {
    const [value, setValue] = useState('');

    return (
        <div className={styles.AddInput}>
            <input type="text" onChange={(e) => setValue(e.target.value)} />
            <Button title="Добавить" type="add" onClick={onAdd} isDisabled={!value} />
        </div>
    )
}