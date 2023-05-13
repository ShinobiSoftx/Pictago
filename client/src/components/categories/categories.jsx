import React from 'react';
import { Link } from 'react-router-dom';
import './categories.css'

const Categories = () => {
  return (
    <div className="categories">
      <ul>
        <li>
          <Link className="category-link" to="/anime">
            <i className="fas fa-tv"></i> Anime
          </Link>
        </li>
        <li>
          <Link className="category-link" to="/cooking">
            <i className="fas fa-utensils"></i> Cooking
          </Link>
        </li>
        <li>
          <Link className="category-link" to="/games">
            <i className="fas fa-gamepad"></i> Games
          </Link>
        </li>
        <li>
          <Link className="category-link" to="/fashion">
            <i className="fas fa-tshirt"></i> Fashion
          </Link>
        </li>
        <li>
          <Link className="category-link" to="/travel">
            <i className="fas fa-plane"></i> Travel
          </Link>
        </li>
        <li>
          <Link className="category-link" to="/music">
            <i className="fas fa-music"></i> Music
          </Link>
        </li>
        <li>
        <Link className="category-link" to="/decoration">
            <i className="fas fa-couch"></i> Decoration
          </Link>
        </li>
        <li>
          <Link className="category-link" to="/fitness">
            <i className="fas fa-dumbbell"></i> Fitness
          </Link>
        </li>
        <li>
          <Link className="category-link" to="/vehicles">
            <i className="fas fa-car"></i> Vehicles
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
