import React from 'react';
import WatchlistCard from './WatchlistCard';
import './WatchlistContainer.css';

const WatchlistContainer = (props) => {
    function generateTitles(titles) {
        return titles.map((title, index) => {
            return <WatchlistCard key={title._id} title={title} index={index} />
        });
    }

    return(
            <div className="watchlist-container">
                <div className="watchtitles">
                    {generateTitles(props.titles)}
                </div>
            </div>
        
    );
}

export default WatchlistContainer;