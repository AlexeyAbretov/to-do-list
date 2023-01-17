export type ToDoItemType = {
    id: string;
    title: string;
    isDone: boolean;
}

export type ToDoListType = Array<ToDoItemType>;

export enum ActionKind {
    Add = 'ADD',
    Edit = 'EDIT',
    Remove = 'REMOVE',
    Finish = 'FINISH',
    Revert = 'REVERT',
}

export type EditAction = {
    type: ActionKind.Edit;
    payload: Pick<ToDoItemType, 'id' | 'title'>;
}

export type AddAction = {
    type: ActionKind.Add;
    payload: ToDoItemType;
}

export type IdAction = {
    type: ActionKind.Remove | ActionKind.Finish | ActionKind.Revert;
    payload: string;
}

export type Action = EditAction | AddAction | IdAction;


export type ToDoStateType = {
    items: ToDoListType;
}

export type ToDoContextType = {
    dispatch: React.Dispatch<Action>;
    state: ToDoStateType;
}
