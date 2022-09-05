import React, { useState, useRef } from "react";
import { FormContainer, Input, Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
    };

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const contentTrimmed = newTaskContent.trim();

        if (!contentTrimmed) {
            return;
        }

        dispatch(addTask({
            content: contentTrimmed,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        focusInput();
    };
    return (
        <FormContainer onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                autoFocus
                required
                onChange={({ target }) => setNewTaskContent(target.value)}
                name="input"
                placeholder="Co jest do zrobienia?" />
            <Button>Dodaj zadanie</Button>
        </FormContainer>
    );
};

export default Form;