import React from 'react';
import './Login.css';

class Login extends React.Component {

    render() {
        return (
            <div className='Login'>
                <form>
                    <div className='col'>
                        <label htmlFor='email'>
                            Enter your email:
                        </label>
                        <input
                            className='row'
                            id='email'
                            type='email'
                            placeholder='Email...'
                            onChange={this.props.emailHandler}
                        />
                        <p>Enter your password:</p>
                        <input
                            className='row'
                            id='password'
                            type='password'
                            placeholder='Password...'
                            onChange={this.props.passwordHandler}
                        />
                        <button
                            className='row btn btn-success'
                            type='submit'
                            style={{
                                margin: '15px',
                                backgroundColor: '#1abc9c',
                                color: '#333',
                                border: '2px solid #333',
                                ':hover': {
                                    backgroundColor: 'white'
                                }
                            }}
                            id='login-submit'
                            onClick={this.props.logInHandle}>
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;