import React from 'react';
import Button from '../button/button';

export default (props) => {
  let username, password;

  return (
    <div className='login-form-overlay'>
      <div className='login-form-container'>
        <div>
          <input type='text' placeholder='username' ref={(ref) => {
            username = ref;
          }}></input>
        </div>
        <div>
          <input type='password' placeholder='password' ref={(ref) => {
            password = ref;
          }}></input>
        </div>
        <div>
          <Button btnClass='pull-right' onClick={() => {
            props.login({
              username: username.value,
              password: password.value
            });
          }}>Login</Button>
          <div className='clear'></div>
        </div>
      </div>
    </div>
  );
};