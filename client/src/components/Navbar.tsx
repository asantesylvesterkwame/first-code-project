import Button from "./Button";
import Logo from "./Logo";
import "../styles/components/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Logo />
      </div>
      <div className="nav-links">
        {/* Navigation links can be added here */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="nav-buttons">
        <Button variant="secondary">Login</Button>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Navbar;
