import React, { useEffect } from "react";
import axios from "./axios";
import validator from "validator";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const appStyle = {
  height: "450px",
  display: "flex"
};

const formStyle = {
  margin: "auto",
  padding: "40px",
  border: "1px solid #c9c9c9",
  borderRadius: "5px",
  background: "#f5f5f5",
  width: "400px",
  display: "block"
};

const labelStyle = {
  margin: "10px 0 5px 0",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "15px"
};

const inputStyle = {
  margin: "5px 0 10px 0",
  padding: "5px",
  border: "1px solid #bfbfbf",
  borderRadius: "3px",
  boxSizing: "border-box",
  width: "100%"
};

const submitStyle = {
  margin: "10px 0 0 0",
  padding: "7px 10px",
  border: "1px solid #efffff",
  borderRadius: "3px",
  background: "#3085d6",
  width: "100%",
  fontSize: "15px",
  color: "white",
  display: "block"
};

const Field = React.forwardRef(({ label, type }, ref) => {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input ref={ref} type={type} style={inputStyle} />
    </div>
  );
});

const Form = () => {
  let history = useHistory();
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      validator.isEmail(usernameRef.current.value) &&
      passwordRef.current.value.length > 6
    ) {
      window.localStorage.setItem("username", usernameRef.current.value);
      window.localStorage.setItem("password", passwordRef.current.value);

      async function fetchData() {
        const request = await axios.get(
          "authentication/token/new?api_key=035a94e700cc415cf0acdd05ad8aa55e"
        );

        window.localStorage.setItem("expire", request.data.expires_at);
        return request;
      }
      fetchData()
        .then(() => {
          toast.success("Logged In.");
          history.replace("./logged");
        })
        .catch(() => {
          alert("Error");
          window.localStorage.setItem("login", true);
        });
    } else {
      toast.error("Enter Valid Credentials with correct mail and password");
    }
  };
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <form style={formStyle}>
        <Field ref={usernameRef} label="Username:" type="text" />
        <Field ref={passwordRef} label="Password:" type="password" />
        <div>
          <button style={submitStyle} type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
