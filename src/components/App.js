import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import NavBar from '../components/NavBar';
import MealList from '../containers/MealList';
import MealDetails from './MealDetails';
import TestCode from '../containers/TestCode';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<TestCode />} />
          <Route path="/Meal/:id" element={<MealDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
