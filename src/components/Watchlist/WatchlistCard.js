// imports
import React from 'react';
import {Link} from 'react-router-dom';
import './WatchlistCard.css';

// component that renders watchlist titles
const WatchlistCard = (props) => {
    const {name, posterImage, _id} = props.title;

    return(
        <div className="card-container">
            <Link to={`/titles/${_id}`}>
                <img src={posterImage} alt={name} />
            </Link>
        </div>
    );
}

export default WatchlistCard;