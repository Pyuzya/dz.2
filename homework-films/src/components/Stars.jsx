import React, { useState } from 'react';
import Star from './Star';
import PropTypes from 'prop-types';

function Stars(props) {
    const [stars, setStars] = useState(props.count)

    let starsArray = [];
    for (let i = 0; i < stars; i++) {
        starsArray.push(
            <li key={i}>
                <Star />
            </li>
        );
    }

    console.log(stars);

    const handlePlus = () => {
        setStars(starPlus => starPlus + 1)
    }

    const handleMinus = () => {
        setStars(starMinus => starMinus - 1);
    }

    if (stars >= 0 && stars <= 5) {
        return (
            <div className='card-body-stars'>
                <ul>{starsArray.map((item) => item)}</ul>
                <button onClick={handlePlus}>+</button>
                <button onClick={handleMinus}>-</button>
            </div>
        )
    } else {
        return false
    }
}

export default Stars;
