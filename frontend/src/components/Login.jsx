import React from "react";
import logo from "../assets/logo.png";
import video from "../assets/share.mp4";
import { useNavigate } from 'react-router';
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function Login() {
  const navigate = useNavigate();
  
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          controls={false}
          src={video}
          type="video/mp4"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} alt="This is the logo" width="130px" /> 
          </div>
          <div className="shadow-2xl">
            <GoogleLogin
              onSuccess={(response) => {
                console.log(response);
                const decode=jwtDecode(response.credential);
                const draft={
                  _id: decode.email,
                  _type: 'user',
                  userName: decode.given_name,
                  image: decode.picture,
                }
                console.log(draft);
                navigate("/");
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            ;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
