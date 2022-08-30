import { useEffect, useState } from "react";

export const useLocalStorageTasks = () => {
    const getFromLocalStorage = () =>
        JSON.parse(localStorage.getItem("tasks")) || [];

    const [tasks, setTasks] = useState(getFromLocalStorage);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return [tasks, setTasks]
};
