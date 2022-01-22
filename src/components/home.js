import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <div className="home-container">
        <section className="hero-info">
          <h1 className="hero-text">
            Shop your best looks on <br />{" "}
            <span style={{ color: "#fe656b" }}>CORAL-store</span>
          </h1>
          <Link className="nav-link button hero-button" to="/products">
            Shop Now
          </Link>
        </section>

        <img
          className="hero-image"
          src="/images/Saly-34.png"
          alt="3D person facing right"
        />
      </div>
      <footer>Made with ❤ by Madhushree Kunder</footer>
    </div>
  );
}
