import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function Nav() {
  const [input, setInput] = useState("");
  let history = useHistory();
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const onCliked = () => {
    history.push(`/search/${input}`);
  };
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://portotheme.com/shopify/wokiee/doc/files/images/logo.png"
        alt="Logo"
      />
      <div class="search">
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={input}
            onChange={handleChange}
          ></input>
          <button
            class="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
            onClick={onCliked}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Nav;
