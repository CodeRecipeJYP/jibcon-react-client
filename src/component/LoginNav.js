import React from 'react';
import FacebookLogin from 'react-facebook-login';

const LoginNav = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <FacebookLogin
      appId="440498979632151"
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}
      cssClass="my-facebook-button-class"
      icon="fa-facebook"
    />
  );
};


export default LoginNav;