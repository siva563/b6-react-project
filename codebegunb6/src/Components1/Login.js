import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import the CSS for styling
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase/Setup";
import Navbar from "./Navbar";
 // Ensure your firebase config is correctly set up

function Login() {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const sendOtp = () => {
    const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {
      size: "invisible",
    });

    signInWithPhoneNumber(auth, phone, recaptcha)
      .then((confirmation) => setUser(confirmation))
      .catch((error) => console.error("Error sending OTP:", error));
  };

  return (
    <>
    <Navbar/>
    <div className="bg-rose-50 h-screen flex flex-col justify-center items-center">
      <div className="h-72 w-96 bg-white p-6 rounded-lg shadow-md">
        {/* Title */}
        <h1 className="font-bold text-lg">
          Login  
          <span className="font-normal text-sm"> or </span>
          Signup
        </h1>
        {/* Phone Input */}
        <div className="mt-4">
          <PhoneInput
            country={"us"} // Default country
            value={phone}
            onChange={setPhone} // Simplified state update
            inputStyle={{ width: "100%" }} // Ensures full-width input
            placeholder="Mobile-number"
            buttonStyle={{ backgroundColor: "white" }}
            inputProps={{
              style: { width: "320px" },
            }}
          />
        </div>
        <h1 className="text-xs text-gray-400 mt-4">
          By clicking continue, you can
          <span className="text-rose-500 font-bold"> log in to this Myntra clone</span>
        </h1>
        <button
          onClick={sendOtp}
          className="bg-rose-500 text-white w-80 font-bold py-2 px-4 text-sm mt-4"
        >
          Continue
        </button>
        <div id="recaptcha"></div>
        <input
          className="bg-gray-50 text-gray-900 font-normal text-sm rounded-lg block w-full p-2.5 mt-4"
          placeholder="Enter Otp"
          required
        />
        <h1 className="text-xs text-gray-400 mt-4">
          Have trouble logging in?{" "}
          <span className="text-rose-500 font-bold">Click continue</span>
        </h1>
      </div>
    </div>
    </>
  );
}


export default Login;
