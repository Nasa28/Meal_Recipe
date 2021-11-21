import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import NavBar from './NavBar';
import MealList from '../containers/MealList';
import MealDetails from '../containers/MealDetails';
import Error from './Error';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<MealList />} />
          <Route path="/Meal/:id" element={<MealDetails />} />
          <Route path="*" element={<Error />}>
            404 Not Found!
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
