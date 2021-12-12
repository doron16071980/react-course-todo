
import { useState } from 'react';

export function Login() {

    const [user, updateUserFunc] = useState({firstName: '', lastName: ''});

    const handleFormSubmit = (e) => {

        e.preventDefault();

        updateUserFunc({firstName: 'Doron', lastName: 'Arnon'});
    
    }

    const message = user.firstName ? 'Hello ' + user.firstName + ' ' + user.lastName : '';

    return (

        <form onSubmit={handleFormSubmit}  >
            <label htmlFor='email' value='email'>אי מייל</label>
            <input id="email" type="email" name="email" placeholder="אי מייל"></input>
            <br/>
            <label htmlFor='password' value='password'>סיסמא</label>
            <input id="password" typ="password" name="password" placeholder="סיסמא"></input>
            <br/>
            <button type='submit'>שלח</button>

            <h1>
                {message}
            </h1>


        </form>
    )
}


