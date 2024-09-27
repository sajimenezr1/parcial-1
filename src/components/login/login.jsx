import React, { useEffect, useState } from 'react';
import './login.css'
import { authenticateUser } from './services';


export const Login = () => {
    const [classValue, setClassValue] = useState('normal-login');
    const [formValues, setFormValues] = useState({ user: "", password: "" });


    const handleUserChange = ((e) => {
        setFormValues({ ...formValues, email: e.target.value })
    });

    const handlePasswordChange = ((e) => {
        setFormValues({ ...formValues, password: e.target.value })
    });

    const handleLogin = async () => {
        const data = await authenticateUser(formValues);
        if (data == 'error'){
            setClassValue('error-login')
        }else{
            // TO DO navigate 
        }
    }


    return (
        <div className='col d-flex flex-column justify-content-center align-items-center'>
            <h2>Inicio de sesión</h2>
            <form id='form-login'>
                <label htmlFor="email">Nombre de usuario</label>
                <input id="user" className={classValue} onChange={handleUserChange} value={formValues.user} autoComplete='off' required />
                
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" className={classValue} onChange={handlePasswordChange} value={formValues.password} autoComplete='off' required />
            </form>
            <div className="row">
                <button type='button' className='col btn btn-primary' onClick={handleLogin} >Ingresar</button>
                <button type='button' className='col btn btn-danger'>Cancelar</button>
            </div>

        </div>
    )
}