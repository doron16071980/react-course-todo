
import { useState } from 'react';

export function Login() {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState({firstName: '', lastName: '',createdAt:''});

    const handleFormSubmit = (e) => {

        e.preventDefault();

        fetch('https://academeez-login-ex.herokuapp.com/api/users/login',{
            method:'post',
            body: JSON.stringify({
                //email: 'yariv@nerdeez.com',
                //password: '12345678'
                email: email,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
            
        })
        .then(response => response.json())
        .then(data => setUser(data));
   
    }

    const handleEmailChange = (e) =>
    {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) =>
    {
        setPassword(e.target.value);
    }

    return (
        

        <form onSubmit={handleFormSubmit}  >
            <label htmlFor='email' value='email'>אי מייל</label>
            <input id="email" type="email" name="email" placeholder="אי מייל" onChange={handleEmailChange}></input>
            <br/>
            <label htmlFor='password' value='password'>סיסמא</label>
            <input id="password" typ="password" name="password" placeholder="סיסמא" onChange={handlePasswordChange} ></input>
            <br/>
            <button type='submit'>שלח</button>

            <h1>
                {user.firstName && 'Hello ' + user.firstName + ' ' + user.lastName + ' ' + user.createdAt}
            </h1>


        </form>
    )
}


