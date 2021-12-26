import { useState, useEffect } from "react";

export function useToDo() {
  
    const [tasks, setTasks] = useState(null); 

    useEffect(() => {
        //call the server
        getTasks();

    }, [])

    async function getTasks()
    {
        const response = await fetch('https://nztodo.herokuapp.com/api/tasks/?format=json');
        const data = await response.json();
        setTasks(data);
    }

    return tasks;

}