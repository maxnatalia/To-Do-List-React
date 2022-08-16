import React from "react";
import "./style.css";

const Buttons = (props) => (
    <div className="container__titleButtons">
        {props.tasks.length > 0 && (
            <React.Fragment>
                <button className="container__titleButtons">
                    {props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="container__titleButtons"
                    disabled={props.tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </React.Fragment>
        )}
    </div>
);

export default Buttons;