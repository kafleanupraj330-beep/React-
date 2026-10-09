import React from 'react';
import Badge from './Badge';
import Rating from './Rating';

function RestaurantCard({ restaurant }) {
    return (
        <div className="restaurant-card">
            <div className="card-image-container">
                <img src={restaurant.image} alt={restaurant.name} className="card-image" />
            </div>
            <div className="card-content">
                <div className="card-header">
                    <h2 className="restaurant-name">{restaurant.name}</h2>
                    <Rating score={restaurant.rating} />
                </div>

                <div className="badge-container">
                    <Badge text={restaurant.cuisine} variant="primary" />
                    <Badge text={restaurant.price} variant="secondary" />
                </div>

                <p className="restaurant-location">
                    📍 {restaurant.location}
                </p>

                <p className="restaurant-description">
                    {restaurant.description}
                </p>
            </div>
        </div>
    );
}

export default RestaurantCard;