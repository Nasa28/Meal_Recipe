import MealList from '../containers/MealList';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <>
      <div className="nav">
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
          <h3 className="heading">About</h3>
        </div>
      </div>
    </>
  );
};

export default NavBar;
