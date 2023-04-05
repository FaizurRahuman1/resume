import React from "react";
import { NavLink } from "react-router-dom";
import './styles/home.css'
function Home(props) {
    return(
      <section className="d-flex align-items-center" id="home" >
          <div className="container d-flex flex-column align-items-center shadow-lg p-4">
          <h1 className="display-1">Mohamed Faizur Rahuman</h1>
          <h2 className="display-6 text-center">I'm a Professional MERN stack Developer</h2>
          <NavLink to={`/about`} className='btn btn-outline-warning'><i className="bi bi-person-fill"></i> About Me</NavLink>
        </div>
      </section>
    )
}
export default Home