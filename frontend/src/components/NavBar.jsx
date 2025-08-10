import { Link } from "react-router-dom";

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie Guide</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/" className="nav-link">Favourites</Link>
        </div>
    </nav>
}

export default NavBar