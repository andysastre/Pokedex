import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUser } from '../store/slices/user.slices';




const Login = () => {


    const [userName, setUsername] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const submit = (e) => {
        e.preventDefault();
        dispatch(changeUser(userName));
        navigate("/pokemonsCards");
    }




    return (

        <div className='Absolute-Input'>

            <div className='Login-Input'>
                <h3 className='Title-Login'>Bienvenido a la Poke<span>dex, entrenador!</span></h3>
                
                <p><span> Ingresa tu nombre pa</span>ra continuar</p>
                <form onSubmit={submit}>
                    <input
                        type="text"
                       className='input'
                        value={userName}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <button className='Login-Button'>
                       <span>Continuar</span>
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Login;