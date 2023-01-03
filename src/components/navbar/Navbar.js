import "./Navbar.css"
import React from "react"

const Navbar = () => {
  return (
    <section>
      <div className="container navbar-container">
        <div className="logo">
          <h3>Kourse</h3>
        </div>
        <div className="navigation">
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Post a Job</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="signup">
          <button type="button" className="btn">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  )
}

export default Navbar
