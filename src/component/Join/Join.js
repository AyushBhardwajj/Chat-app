import React, { useState } from "react";
import "./Join.css";
import logocchat from "../../images/logocchat.png";
import { Link } from "react-router-dom";

let user;

const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
};

const Join = () => {
  const [name, setname] = useState("");
  console.log(name);
  return (
    <div className='JoinPage'>
      <div className='JoinContainer'>
        <img src={logocchat} alt='logo' />
        <h1>C-CHAT</h1>
        <input
          onChange={(e) => setname(e.target.value)}
          placeholder='Enter Your Name'
          type='text'
          id='joinInput'
        />
        <Link
          onClick={(event) => (!name ? event.preventDefault() : null)}
          to='/chat'
        >
          <button onClick={sendUser} className='joinbtn'>
            login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { user };
