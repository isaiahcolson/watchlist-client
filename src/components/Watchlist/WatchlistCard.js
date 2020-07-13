// imports
import React from 'react';

// component that renders watchlist titles
const WatchlistCard = (props) => {
    const {name} = props.title;

    return(
        <div>
            <p>{name}</p>
        </div>
    );
}

export default WatchlistCard;