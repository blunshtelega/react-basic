
import React, {useContext} from 'react';
import {AuthContext} from "../context/context";
import CommonInput from '../components/UI/Input/CommonInput';
import CommonButton from '../components/UI/Button/CommonButton';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <CommonInput type="text" placeholder="Введите логин"/>
                <CommonInput type="password" placeholder="Введите пароль"/>
                <CommonButton>Войти</CommonButton>
            </form>
        </div>
    );
};

export default Login;