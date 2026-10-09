import React from 'react';
import { restaurants } from './data/restaurants';
import RestaurantCard from './components/RestaurantCard';
import './App.css';

function App() {
  return (
      <div className="app-container">
        <header className="app-header">
          <h1>Discover Top Restaurants</h1>
          <p>Explore high-rated dining spots around the city</p>
        </header>

        <main className="restaurant-grid">
          {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </main>
      </div>
  );
}

export default App;