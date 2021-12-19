import { useEffect, useState } from "react";

export function ToDoList() {
  
    const [tasks, updateTasks] = useState(null); 

    async function getTasks()
    {
        const response = await fetch('https://nztodo.herokuapp.com/api/tasks/?format=json');
        const data = await response.json();
        updateTasks(data);
    }

    useEffect(() => {
        //call the server
        getTasks();

    }, [])

    return (
        <ul>
            
                {
                    tasks?.map((item) => {
                        return (
                            <li key={item.id}>
                                <h1>

                                    {item.title}

                                </h1>
                                <p>

                                    {item.description}

                                </p>
                            </li>
                        );
                    }

                    )
                }
        </ul>
    )
}