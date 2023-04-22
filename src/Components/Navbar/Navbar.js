import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../images/logo.png";
import chevrondown from "../../images/chevrondown.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img className="logo" alt="logo" src={logo}></img>
        </div>
        <div className="search-container">
          <input
            className="form-control mr-sm-2 search"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>
        <button type="button" className="btn btn-dark checkout">
          <span>Checkout (200)</span>
        </button>
        <div className="avatar-container">
          <img
            className="rounded-circle avatar"
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            alt="Avatar"
          />
          <span>User Admin</span>
          <img className="avatar-dropdown" alt="logo" src={chevrondown}></img>
        </div>
      </nav>
      <div className="hamburger">
        <div className="logo-container">
          <img className="logo" alt="logo" src={logo}></img>
          <div className="avatar-container-sm">
            <img
              className="rounded-circle avatar hamburger-avatar"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              alt="Avatar"
              onClick={() => myFunction()}
            />
          </div>
        </div>
        <div id="small-view" className="hamburger-list">
          <ul>
            <li>
              <input
                className="form-control mr-sm-2 search"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
            </li>
            <li className="sm-cart-container">
              <AiOutlineShoppingCart className="sm-cart" />
              <span>Checkout (200)</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

function myFunction() {
  var x = document.getElementById("small-view");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

export default Navbar;
