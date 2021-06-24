import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function Nav() {
  console.log(localStorage);
  const [input, setInput] = useState("");
  const [login, setLogin] = useState(false);
  let history = useHistory();
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const onCliked = () => {
    history.push(`/search/${input}`);
  };
  const onCliked2 = (e) => {
    e.preventDefault();
    history.push(`/`);
  };
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://portotheme.com/shopify/wokiee/doc/files/images/logo.png"
        alt="Logo"
      />
      <div className="search">
        <form className="form-inline my-2 my-lg-0">
          <input
            classNames="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={input}
            onChange={handleChange}
          ></input>
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
            onClick={onCliked}
          >
            Search
          </button>
          {login ? (
            <button
              className="btn btn-outline-danger my-2 my-sm-0"
              type="submit"
              onClick={onCliked2}
            >
              Logout
            </button>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
}

export default Nav;
