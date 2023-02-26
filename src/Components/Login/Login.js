import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../../Firebase/firebase';
import { toast } from "react-hot-toast";
import { useDispatch } from 'react-redux';

function Login() {

  let navigate = useNavigate()
  const authentication = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()


  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {

        console.log({ User: response.user })
        toast.success('Login Successfully Please Login!')
        navigate('/')
        sessionStorage.setItem('Auth-Token', response._tokenResponse.refreshToken)
      })
      .catch(error => {
        console.log('error')
        toast.error(error?.message)

        alert(error.message)
      })
  };

  const register = (e) => {
    e.preventDefault();

    let id = toast.loading("Loading... ")

    createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        // toast.success('Registerd Successfully Please Login!', { id })

        alert('Registerd Successfully Please Login!')
      })
      .catch(error => {
        toast.error("error", { id })
      })

  };

  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt=""
      />

      <div className="login__container">
        <h1>Sign-in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON-CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          onClick={register}
          className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>

  );
}

export default Login;
