import { useDispatch, useSelector } from "react-redux";
import React, { useState, useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { FormContainer, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import Input from "../../Input";
import { selectLanguage } from "../../../../common/language/languageSlice";
import descriptions from "../../../../common/language/descriptions";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const language = useSelector(selectLanguage);

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
                placeholder={descriptions[language].inputPlaceholder} />
            <Button>{descriptions[language].formButtonInnerText}</Button>
        </FormContainer>
    );
};

export default Form;