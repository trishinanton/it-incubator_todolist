import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, IconButton, TextField} from "@material-ui/core";
import {ControlPoint} from "@material-ui/icons";

type AddItemFormPropsType = {
    addItem: (title: string)=> void;
}
export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode == 13) {
            addTask()
        }
    }

    const addTask = () => {
        if (title.trim() !== '' && title !== 'bla') props.addItem(title.trim());
        else (setError('Title is required'))
        setTitle('');

    }

    return <div>
        <TextField variant={"outlined"}
                   label={'Type value'}
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   error={!!error}
                   helperText={error}
        />
        <IconButton onClick={addTask} color={"primary"}>
            <ControlPoint/>
        </IconButton>
    </div>
}