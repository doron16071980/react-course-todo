import { useToDo} from './useTodo'

export function ToDoList() {
  
    const tasks =  useToDo();

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