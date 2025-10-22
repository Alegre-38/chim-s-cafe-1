import React, { useState } from 'react'
import Menu from './Menu'

export default function Home(){
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  function handleReservation(e){
    e.preventDefault()
    // form validation would go here
    setSuccessMessage('Reservation submitted successfully! We will contact you soon.')
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 5000)
  }

  function handleFeedback(e){
    e.preventDefault()
    setSuccessMessage('Thank you for your feedback! We appreciate your input.')
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 5000)
  }

  return (
    <div>
      {/* Success Alert */}
      {showSuccess && (
        <div className="alert alert-success alert-dismissible fade show position-fixed" style={{top: '100px', right: '20px', zIndex: 1050}}>
          <i className="fas fa-check-circle me-2"></i>
          {successMessage}
          <button type="button" className="btn-close" onClick={() => setShowSuccess(false)}></button>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="hero-section bg-primary text-white d-flex align-items-center" style={{minHeight:'70vh', backgroundImage: 'url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Welcome Chimmies</h1>
              <p className="lead mb-4">Experience the perfect blend of cozy atmosphere and exceptional coffee</p>
              <a href="#menu" className="btn btn-warning btn-lg px-4">
                <i className="fas fa-utensils me-2"></i>View Our Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold text-primary mb-4">About</h2>
              <p className="lead">We brew community since 2025. Delicious coffee and homemade pasta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="display-5 fw-bold text-center text-primary mb-5">Menu</h2>
              <Menu />
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold text-center text-primary mb-4">Reservation</h2>
              <form onSubmit={handleReservation} className="card shadow">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Contact Number</label>
                    <input className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Date</label>
                    <input type="date" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Time</label>
                    <input type="time" className="form-control" required />
                  </div>
                  <button className="btn btn-primary btn-lg w-100">
                    <i className="fas fa-calendar-check me-2"></i>Book Reservation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold text-center text-primary mb-4">Feedback</h2>
              <form onSubmit={handleFeedback} className="card shadow">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Name</label>
                    <input className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea className="form-control" rows="4" required></textarea>
                  </div>
                  <button className="btn btn-primary btn-lg w-100">
                    <i className="fas fa-paper-plane me-2"></i>Submit Feedback
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <div className="mb-4">
                <a href="#" className="text-warning me-3 fs-4"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-warning me-3 fs-4"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-warning fs-4"><i className="fab fa-twitter"></i></a>
              </div>
              <p className="mb-2">© 2023 Chim's Cafe. All rights reserved.</p>
              <p className="text-muted">Designed with love for coffee and community</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
