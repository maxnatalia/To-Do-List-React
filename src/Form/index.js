import React, { useState, useRef } from "react";
import { FormContainer, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const contentTrimmed = newTaskContent.trim();

        if (!contentTrimmed) {
            return;
        }
        addNewTask(contentTrimmed);
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