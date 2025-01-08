import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/SavedCandidates"
            className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
          >
            Saved Candidates
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;