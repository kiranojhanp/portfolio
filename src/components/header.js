import React from "react"
import { Link } from "gatsby"
// import Footer from "./footer"
import { IconContext } from "react-icons/lib"
import * as AiIcons from "react-icons/ai"

import { SidebarData } from "./SidebarData"

import "../styles/Navbar.scss"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={`${headerStyles.navMenu} ${headerStyles.active}`}>
          <ul className={headerStyles.navMenuItems}>
            <li className={headerStyles.navbarToggle}>
              <Link to="#" className={headerStyles.menuIcon}>
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
