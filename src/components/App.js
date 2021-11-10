import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import NavBar from '../components/NavBar';
import mealList from '../components/mealList';
import mealRecipe from '../components/mealRecipe';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact component={mealList} />
          <Route path="/meal/:mealId" component={mealRecipe} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
