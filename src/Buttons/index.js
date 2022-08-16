import React from "react";
import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => (
    <div className="container__titleButtons">
        {tasks.length > 0 && (
            <>
                <button className="container__titleButtons">
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="container__titleButtons"
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </>
        )};
    </div>
);

export default Buttons;