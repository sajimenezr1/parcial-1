import React, { useState } from 'react';
import './login.css'
import { authenticateUser } from './services';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from "react-intl"

export const Login = () => {
    const [classValue, setClassValue] = useState('form-control bg-dark-subtle rounded-0 height-control ');
    const [formValues, setFormValues] = useState({ user: "", password: "" });
    const [ validationState, setValidationState ] = useState(false);
    const navigate = useNavigate()

    const handleUserChange = ((e) => {
        setFormValues({ ...formValues, user: e.target.value });
    });

    const handlePasswordChange = ((e) => {
        setFormValues({ ...formValues, password: e.target.value });
    });

    const handleLogin = async () => {
        const data = await authenticateUser(formValues);
        if (data == 'error' || data.status == 'error') {
            setClassValue('form-control bg-dark-subtle rounded-0 height-control border-danger')
            setValidationState(true)
        } else {
            navigate('/home')
        }
    }


    return (
        <div className='container d-flex flex-column justify-content-center align-items-center mt-4 mb-5'>

            <h2 className='fw-bold'><FormattedMessage id="Login"/></h2>

            <form className="col-5 d-flex flex-column m-3 gap-2" id='form-login'>

                <label htmlFor="user" className='labels'><FormattedMessage id="UserName"/></label>
                <input type ="user" className={classValue} onChange={handleUserChange} value={formValues.user} autoComplete='off'  />

                <label htmlFor="password" className='labels'><FormattedMessage id="Password"/></label>
                <input type="password" className={classValue} onChange={handlePasswordChange} value={formValues.password} autoComplete='off'  />
                
                <div className="d-flex justify-content-between mt-4 gap-3">
                    <button type='button' className='btn  font-weight-bold btn-primary rounded-0  w-50 height-control' onClick={handleLogin} ><FormattedMessage id="SignIn"/></button>
                    <button type='button' className='btn font-weight-bold btn-danger rounded-0  w-50 height-control'><FormattedMessage id="Cancel"/></button>
                </div>
                {validationState && <p className='text-danger fw-bold fs-5'><FormattedMessage id="ErrorMessage"/></p>}

            </form>


        </div>
    )
}