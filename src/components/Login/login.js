
import { useLogin } from './useLogin'

export function Login() {

    const [user, form, handleLogin, handleChange] = useLogin();

    const handleSubmit = (e) =>
    {
        handleLogin(e, form);
    }

    const handleFormChange = (e) =>
    {
        handleChange(e);
    }

    return (
        

        <form onSubmit={handleSubmit}  >
            <label htmlFor='email' value='email'>אי מייל</label>
            <input id="email" type="email" name="email" value={form.email} placeholder="אי מייל" onChange={handleFormChange}></input>
            <br/>
            <label htmlFor='password' value='password'>סיסמא</label>
            <input id="password" typ="password" value={form.password} name="password" placeholder="סיסמא" onChange={handleFormChange} ></input>
            <br/>
            <button type='submit'>שלח</button>

            <h1>
                {user.firstName && 'Hello ' + user.firstName + ' ' + user.lastName + ' ' + user.createdAt}
            </h1>


        </form>
    )
}


