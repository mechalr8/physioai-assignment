import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Content-Type"] = "application/json";

const Login = () => {
  const navigate = useNavigate();
  const { username, setUsername, password, setPassword, setUser } =
    useContext(GlobalContext);

  const jsonObject = {
    uid: `${username}`,
    password: `${password}`,
    blocked: 0,
  };
  const jsonString = JSON.stringify(jsonObject);
  const encodedData = btoa(jsonString);
  const url =
    "https://cors-anywhere.herokuapp.com/https://myphysio.digitaldarwin.in/api/login_v1/";

  // Localhost was blocked by CORS Policy, so had to add "https://cors-anywhere.herokuapp.com/" to the original url and had to request the temporary access to the demo server from "https://cors-anywhere.herokuapp.com/corsdemo" to run the app.

  const getData = async (url, payload) => {
    try {
      const response = await axios.post(url, {
        payload: `${payload}`,
      });
      const decodedString = atob(response.data.response);
      setUser(JSON.parse(decodedString).session_key);
      localStorage.setItem("response", decodedString);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      alert("Login Error");
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    getData(url, encodedData);
  };

  return (
    <div className='login-page'>
      <img
        className='physio-word-cloud'
        alt='physio-word-cloud'
        src='https://images.pond5.com/physiotherapy-animated-word-clouddesign-animation-footage-163222992_prevstill.jpeg'
      />
      <div className='login-container'>
        <img
          className='sai-logo'
          alt='sai-logo'
          src='https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Sports_Authority_of_India_logo.svg/1200px-Sports_Authority_of_India_logo.svg.png'
        />
        <form className='login-form' onSubmit={onSubmitHandler}>
          <input
            type='text'
            placeholder='username'
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type='password'
            placeholder='password'
            onChange={(event) => setPassword(event.target.value)}
          />
          <input type='submit' />
        </form>
      </div>
    </div>
  );
};

export default Login;
