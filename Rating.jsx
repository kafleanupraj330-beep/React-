import React from 'react';

function Rating({ score }) {
    return (
        <div className="rating">
            <span className="star">★</span>
            <span className="score">{score}/5</span>
        </div>
    );
}

export default Rating;