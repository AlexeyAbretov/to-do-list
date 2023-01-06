import React from 'react';

import { List } from '..';

export default {
    title: "Example/List",
    component: List,
    argTypes: { onDone: { action: 'clicked' }, onRemove: { action: 'clicked' }, onEdit: { action: 'clicked' } },
}

const Template = args => <div style={{ height: '100px' }}><List {...args} /></div>;

export const Playground = Template.bind({});

Playground.args = {
    items: [
        {
            id: 1,
            title: 'Купить корм попугаю',
            isDone: false
        },
        {
            id: 2,
            title: 'Купить подарок жене',
            isDone: true
        },
        {
            id: 3,
            title: 'Не сдохнуть после трени',
            isDone: false
        },
        {
            id: 4,
            title: 'Отметить новый год',
            isDone: true
        }
    ]
}
