import React from 'react';
import WatchlistCard from './WatchlistCard';

const WatchlistContainer = (props) => {
    function generateTitles(titles) {
        return titles.map((title) => {
            return <WatchlistCard key={title._id} title={title} />
        });
    }

    return(
        <div className="titles-container">
            {generateTitles(props.titles)}
            {/* <p>{props.titles[0].name}</p> */}
        </div>
    );
}

export default WatchlistContainer;