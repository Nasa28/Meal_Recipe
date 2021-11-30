import { Link } from 'react-router-dom';
import MealList from '../containers/MealList';
import '../styles/NavBar.css';
import '../styles/MealList.css';

const NavBar = () => (
  <>
    <nav data-testid="nav" className="nav">
      <div>
        <Link className="heading" to="/" onClick={() => MealList()}>
          <h1>Home</h1>
        </Link>
      </div>
      <header>
        <Link className="heading" to="/" onClick={() => MealList()}>
          <h1>CHOP-LIFE KITCHEN</h1>
        </Link>
      </header>
      <div>
        <Link className="heading" to="/About">
          <h3>About</h3>
        </Link>
      </div>
    </nav>
  </>
);

export default NavBar;
