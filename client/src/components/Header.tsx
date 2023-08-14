import { Link, Outlet } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm">
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item nav-link">
              <Link to="/about" className="title">
                About
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/" className="title">
                Catalog
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/" className="title">
                New Stuff
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
