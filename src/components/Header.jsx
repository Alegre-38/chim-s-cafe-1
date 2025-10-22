import React from 'react'

export default function Header(){

  function goHome() {
    // scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleScrollTo(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand fw-bold text-warning" onClick={(e)=>{e.preventDefault(); goHome();}}>
          <i className="fas fa-coffee me-2"></i>Chim's Cafe
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={(e)=>{e.preventDefault(); goHome();}}>
                <i className="fas fa-home me-1"></i>Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={(e)=>{e.preventDefault(); handleScrollTo('about');}}>
                <i className="fas fa-info-circle me-1"></i>About
              </a>
            </li>
            <li className="nav-item">
              <a href="#menu" className="nav-link" onClick={(e)=>{e.preventDefault(); handleScrollTo('menu');}}>
                <i className="fas fa-utensils me-1"></i>Menu
              </a>
            </li>
            <li className="nav-item">
              <a href="#reservation" className="nav-link" onClick={(e)=>{e.preventDefault(); handleScrollTo('reservation');}}>
                <i className="fas fa-calendar-alt me-1"></i>Reservation
              </a>
            </li>
            <li className="nav-item">
              <a href="#feedback" className="nav-link" onClick={(e)=>{e.preventDefault(); handleScrollTo('feedback');}}>
                <i className="fas fa-comment me-1"></i>Feedback
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
