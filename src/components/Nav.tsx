import { Link, useLocation } from 'react-router-dom';


  // TODO: Add necessary code to display the navigation bar and link between the pages
const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-item">
        <Link to="/" className="nav-link">            
        Home
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/SavedCandidates" className="nav-link">
          Potential Candidates
        </Link>
      </div>
    </div>
  )
 };
  
  export default Nav;