import React from 'react'

const sampleItems = [
  { id:1, name:'Cappuccino', price:120, desc:'Classic espresso with steamed milk.', image:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1'},
  { id:2, name:'Iced Latte', price:140, desc:'Smooth espresso over chilled milk and ice.', image:'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2'},
  { id:3, name:'Frappe', price:150, desc:'Blended cold coffee treat.', image:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3'},
  { id:4, name:'Spaghetti', price:220, desc:'House-made pasta with savory sauce.', image:'https://inspirationseek.com/wp-content/uploads/2016/02/Spaghetti-Pictures.jpg'},
  { id:5, name:'Blueberry Muffin', price:75, desc:'Freshly baked with real blueberries.', image:'https://tse1.mm.bing.net/th/id/OIP.sF6YWho1vrc2-jIfX332gAHaLG?rs=1&pid=ImgDetMain&o=7&rm=3'}
]

export default function Menu(){
  return (
    <div className="row g-4">
      {sampleItems.map(i=> (
        <div className="col-lg-4 col-md-6" key={i.id}>
          <div className="card h-100 shadow-sm border-0">
            <div className="position-relative overflow-hidden" style={{height: '200px'}}>
              <img 
                src={i.image} 
                alt={i.name} 
                className="card-img-top w-100 h-100" 
                style={{objectFit:'cover', transition: 'transform 0.3s ease'}}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>
            <div className="card-body d-flex flex-column p-4">
              <h5 className="card-title fw-bold text-primary mb-2">{i.name}</h5>
              <p className="card-text text-muted mb-3 flex-grow-1">{i.desc}</p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="h5 fw-bold text-success mb-0">₱{i.price}</span>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-outline-primary" onClick={() => alert(`Details for ${i.name}`)}>
                  <i className="fas fa-info-circle me-2"></i>Details
                </button>
                <button className="btn btn-warning" onClick={() => alert(`${i.name} added to cart!`)}>
                  <i className="fas fa-cart-plus me-2"></i>Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
