import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  
    const nav = useNavigate();

    const [user, setUser] = useState(''); 

    const [form, setForm] = useState({email:'',password:''});

    const handleLogin = (e, form) => {

        e.preventDefault();

        fetch('https://academeez-login-ex.herokuapp.com/api/users/login',{
            method:'post',
            body: JSON.stringify({
                email: form.email,
                password: form.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
            
        })
        .then(response => {
            if(response.status === 401){
                throw new Error('Bad cradentials');
            }
            else
            {
                return response.json()
            }
        })
        .then(data => setUser(data))
        .then(() => nav('/todolist')
        ).catch((error) => {
            console.error('Error:', error)
        });  
    }

    const handleChange = (e) =>
    {
        setForm({...form, [e.target.name]:e.target.value});
    }

    return [user,form, handleLogin, handleChange];

}