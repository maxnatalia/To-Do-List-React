import React from "react";
import "./style.css";

const Buttons = ({tasks, hideDone, toggleHideDone}) => (
    <div className="container__titleButtons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="container__titleButtons">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="container__titleButtons"
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;