import React, { useEffect, useState } from "react";
import { MdMovieCreation } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const [posterData, setPosterData] = useState("");
  const [menu, setMenu] = useState(window.innerWidth > 1080);
  const HandleChange = (e) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMenu(window.innerWidth > 1080);
    });
  });
  const handleMenu = () => {
    setMenu(!menu);
    const MenuContainer = document.querySelector(".app-header-menu-container");
    if (MenuContainer !== null)
      if (menu) {
        MenuContainer.style.cssText = "animation:landingPage 600ms ease-in;";
      } else {
        MenuContainer.style.cssText =
          "animation:landingPageReverse 600ms ease-out";
      }
  };
  const HandleSubmit = () => {
    if (searchValue === "") return;
    fetch(`http://127.0.0.1:5000/movie/info/${searchValue}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search: searchValue,
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        // alert("request sent!");
        console.log(resp);
        setPosterData(resp);
      });
  };
  return (
    <div className="app-header">
      {/* <h1>Movie Poster</h1> */}
      <div className="app-header-logo-container">
        <span className="logo">
          <MdMovieCreation />
        </span>
        <span className="company-name">
          Movie<span className="flip-color">Info</span>
        </span>
      </div>
      <div className="app-header-search-bar">
        <input
          type="text"
          placeholder="Movie name"
          id="search-bar"
          onChange={HandleChange}
          value={searchValue}
        />
        <button type="button" className="secondary-btn" onClick={HandleSubmit}>
          <ImSearch />
        </button>
        <button className="secondary-btn app-header-menu" onClick={handleMenu}>
          <AiOutlineMenu />
        </button>
      </div>
      {menu && (
        <div className="app-header-menu-container  landing-menu">
          <ul className="app-header-nav-links">
            <span className="close" onClick={handleMenu}>
              <AiOutlineClose />
            </span>
            <li>
              <Link to="/">Movies</Link>
            </li>
            <li>
              <Link to="/series">series</Link>
            </li>
            <li>
              <Link to="/search">genre</Link>
              {/* <ul className="sub-menu">
                <li>
                  <Link to="/">Action</Link>
                </li>
                <li>
                  <Link to="/">comedy</Link>
                </li>
                <li>
                  <Link to="/">Thriller</Link>
                </li>
                <li>
                  <Link to="/">Sci-fi</Link>
                </li>
              </ul> */}
            </li>
            <li>
              <Link to="/search">Login</Link>
            </li>
            <li>
              <Link to="/search" className="primary-btn">
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
