import React from "react";
import "./Nav.css";

function Nav() {
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
          ></input>
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Nav;
