import React from "react"
import { Link } from "gatsby"
// import Footer from "./footer"
import { IconContext } from "react-icons/lib"
import * as AiIcons from "react-icons/ai"

import { SidebarData } from "./SidebarData"

import "../styles/Navbar.css"

const Header = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="nav-menu active">
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiFillCode />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Header
