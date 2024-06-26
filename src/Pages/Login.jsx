/* eslint-disable react/no-unknown-property */
import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import "./login.css";

const API_URL = import.meta.env.VITE_API_URL;

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    try {
      const response = await axios.post(`${API_URL}/auth/login`, requestBody);
      storeToken(response.data.authToken);
      authenticateUser();
      navigate("/");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="container">
      <div className="left">
        <form className="form" onSubmit={handleLoginSubmit}>
          <h1>Login</h1>
          <div className="input-block">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmail}
              className="input"
              autoComplete="off"
              placeholder="Email"
              required
            />
          </div>
          <div className="input-block">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePassword}
              autoComplete="off"
              className="input"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Log In
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
      <div className="right">
        <div className="img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 731.67004 550.61784"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M0,334.13393c0,.66003,.53003,1.19,1.19006,1.19H730.48004c.65997,0,1.19-.52997,1.19-1.19,0-.65997-.53003-1.19-1.19-1.19H1.19006c-.66003,0-1.19006,.53003-1.19006,1.19Z"
              fill="#3f3d56"
            />
            <polygon
              points="466.98463 81.60598 470.81118 130.55703 526.26809 107.39339 494.98463 57.60598 466.98463 81.60598"
              fill="#a0616a"
            />
            <circle cx="465.32321" cy="55.18079" r="41.33858" fill="#a0616a" />
            <polygon
              points="387.98463 440.60598 394.98463 503.39339 345.98463 496.60598 361.98463 438.60598 387.98463 440.60598"
              fill="#a0616a"
            />
            <polygon
              points="578.98463 449.60598 585.98463 512.39339 536.98463 505.60598 552.98463 447.60598 578.98463 449.60598"
              fill="#a0616a"
            />
            <path
              d="M462.48463,260.10598c-.66897,0-54.14584,2.68515-89.47714,4.46286-16.72275,.84141-29.45202,15.31527-28.15459,32.00884l12.63173,162.5283,36,1,.87795-131,71.12205,4-3-73Z"
              fill="#2f2e41"
            />
            <path
              d="M619.48463,259.10598s9,69,2,76c-7,7-226.5-5.5-226.5-5.5,0,0,48.15354-69.53704,56.82677-71.51852,8.67323-1.98148,146.67323-8.98148,146.67323-8.98148l21,10Z"
              fill="#2f2e41"
            />
            <path
              id="uuid-91047c5b-47d7-4179-8a16-40bd6d529b28-203"
              d="M335.12666,172.23337c-8.35907-11.69074-9.10267-25.48009-1.66174-30.79863,7.44093-5.31854,20.24665-.15219,28.60713,11.54383,3.40375,4.62627,5.65012,10.00041,6.55111,15.67279l34.79215,49.9814-19.8001,13.70807-35.7745-48.83421c-5.07753-2.68845-9.43721-6.55406-12.71405-11.27326Z"
              fill="#a0616a"
            />
            <path
              d="M464.98463,112.60598l51-21,96,148s-67,15-90,18c-23,3-49-9-49-9l-8-136Z"
              fill="#6c63ff"
            />
            <path
              d="M526.98463,137.60598l-18.5-57.70866,24,18.20866s68,45,68,64c0,19,21,77,21,77,0,0,23.5,19.5,15.5,37.5-8,18,10.5,15.5,12.5,28.5,2,13-28.5,30.5-28.5,30.5,0,0-7.5-73.5-31.5-73.5-24,0-62.5-124.5-62.5-124.5Z"
              fill="#3f3d56"
            />
            <path
              d="M468.56831,111.13035l-25.08368,9.97563s4,70,8,76c4,6,18,38,18,38v10.42913s-28,8.57087-27,13.57087c1,5,66,19,66,19,0,0-13-40-21-53-8-13-18.91632-113.97563-18.91632-113.97563Z"
              fill="#3f3d56"
            />
            <path
              d="M452.48463,121.10598s-29-4-34,30c-5,34-1.82283,38.5-1.82283,38.5l-8.17717,19.5-27-30-26,17s47,76,66,74c19-2,47-57,47-57l-16-92Z"
              fill="#3f3d56"
            />
            <path
              d="M597.32321,270.14478l-14.83858,209.96121-38.5-1.5s-8.5-198.5-8.5-201.5c0-3,4-20,29-21,25-1,32.83858,14.03879,32.83858,14.03879Z"
              fill="#2f2e41"
            />
            <path
              d="M541.48463,484.10598s20-6,23-2c3,4,20,6,20,6l5,49s-14,10-16,12-55,4-56-8c-1-12,14-27,14-27l10-30Z"
              fill="#2f2e41"
            />
            <path
              d="M394.48463,470.10598s6-5,8,9c2,14,9,16,2,25s-40,29-46,21c-6-8-3-29,3-31,6-2,11-18,11-18l22-6Z"
              fill="#2f2e41"
            />
            <circle cx="640.64752" cy="145.37771" r="6.18609" fill="#a0616a" />
            <circle cx="617.50148" cy="247.89228" r="6.18609" fill="#a0616a" />
            <circle cx="490.50148" cy="194.89228" r="6.18609" fill="#a0616a" />
            <circle cx="133.50148" cy="131.89228" r="6.18609" fill="#a0616a" />
            <circle cx="601.50148" cy="173.89228" r="6.18609" fill="#a0616a" />
            <circle cx="67.50148" cy="248.89228" r="6.18609" fill="#a0616a" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
