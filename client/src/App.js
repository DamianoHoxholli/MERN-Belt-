import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Router} from '@reach/router';
import Dashboard from './components/Dashboard';
import PetForm from './components/PetForm';
import Edit from './components/Edit';
import Pet from './components/Pet';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
          <h1>Pet Shelter</h1>
            <Link className="nav-item nav-link text-info lead" to="/pets/new">add a pet t0 the shelter</Link>
            <Link className="nav-item nav-link text-info lead" to="/">back to home</Link>
      </nav>
      <Router>
        <Dashboard path="/"/>
        <PetForm path="/pets/new"/>
        <Edit path="/pets/:_id/edit"/>
        <Pet path="/pets/:_id"/>
      </Router>
      
    </div>
  );
}

export default App;