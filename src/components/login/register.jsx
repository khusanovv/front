import React from 'react'
import loginImage from '../../image/login.png'
import loginLogo from '../../image/login_logo.png'
import { Input as BaseInput } from '@mui/base/Input';
import { styled } from '@mui/system';
import './login.css'
import { Link } from 'react-router-dom';

const Register = () => {
    const Input = React.forwardRef(function CustomInput(props, ref) {
        return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
    });

    const blue = {
        100: '#DAECFF',
        200: '#80BFFF',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
    };

    const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
    };

    const InputElement = styled('input')(
        ({ theme }) => `
        width: 500px;
        height: 46px;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        margin-top : -10px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 0px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
      
        &:hover {
          border-color: ${blue[400]};
        }
      
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
        }
      
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
    );
    return (
        <>
            <div className="login">
                <div className="login-form">
                    <div className="form-logo">
                       <Link to='/'>
                        <img src={loginLogo} alt="" />
                       </Link>
                    </div>
                    <div className="form-inputs">
                        <p className='inputs-info'>
                            Мы отправим Вам код для восстановления пароля
                        </p>
                        <h2 className="inputs-title">
                            Заполните поле ниже
                        </h2>
                        <p>E-mail</p>
                        <Input aria-label="Demo input" placeholder="E-mail" />
                        <p>Код </p>
                        <Input aria-label="Demo input" placeholder="Код из почты " />
                        <p>E-mail</p>
                        <Input aria-label="Demo input" placeholder="E-mail" />
                        <p>Код </p>
                        <Input aria-label="Demo input" placeholder="Код из почты " />
                        <p>E-mail</p>
                        <Input aria-label="Demo input" placeholder="E-mail" />
                        <p>Код </p>
                        <Input aria-label="Demo input" placeholder="Код из почты " />
                        <button className="inputs-btn">
                            Отправить код
                        </button>
                        <p className='inputs-footer'>
                            Вспомнили пароль? <span className='inputs-register'>Войдите</span>
                        </p>
                    </div>

                </div>
                <div className="login-img">
                    <div className="login-image"></div>
                    {/* <img className='login-image' src={loginImage} alt="" /> */}
                </div>
            </div>
        </>
    )
}

export default Register