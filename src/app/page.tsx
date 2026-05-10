import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="glass" style={{
        position: 'fixed',
        top: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 4rem)',
        maxWidth: '1200px',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-outfit)' }}>
          TRAVEL<span className="gradient-text">OOP</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontWeight: 600 }}>
          <a href="#destinations">Destinations</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="btn-primary">Book Now</button>
      </nav>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: 0
      }}>
        <Image
          src="/hero-bg.png"
          alt="Travel Hero"
          fill
          style={{ objectFit: 'cover', zIndex: -1 }}
          priority
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(2,6,23,0.4) 0%, rgba(2,6,23,0.9) 100%)',
          zIndex: -1
        }} />
        
        <div className="container animate-fade-in" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', marginBottom: '1.5rem' }}>
            Journey Beyond <br />
            <span className="gradient-text">Boundaries</span>
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-muted)',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            lineHeight: 1.6
          }}>
            Experience the world's most breathtaking destinations with a touch of modern luxury. Traveloop makes your dream getaway a reality.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <button className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Explore Destinations
            </button>
            <button className="glass" style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              color: 'white',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              Watch Trailer
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="destinations">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Featured <span className="gradient-text">Escapes</span></h2>
            <p style={{ color: 'var(--text-muted)' }}>Handpicked destinations for the ultimate wanderlust experience.</p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem'
          }}>
            {[
              { title: "Alpine Serenity", location: "Swiss Alps", price: "$1,299" },
              { title: "Azure Paradise", location: "Maldives", price: "$2,499" },
              { title: "Neon Nights", location: "Tokyo, Japan", price: "$1,899" }
            ].map((item, i) => (
              <div key={i} className="glass" style={{ overflow: 'hidden', transition: 'var(--transition)' }}>
                <div style={{ height: '250px', background: 'rgba(255,255,255,0.05)', position: 'relative' }}>
                  {/* Placeholder for destination images */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)'
                  }}>
                    Destination Image
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem' }}>{item.title}</h3>
                    <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{item.price}</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{item.location}</p>
                  <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
            TRAVEL<span className="gradient-text">OOP</span>
          </div>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            © 2026 Traveloop Inc. All rights reserved. Crafted for the modern explorer.
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', color: 'var(--text-muted)' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
