// imports
import React from 'react';
import TitleCard from '../TitleCard';

// component that generates all titles in database
const Titles = (props) => {
    function generateTitles(titles) {
        return titles.map((title) => {
            if (title.mediaType === "movie") {
                return <TitleCard key={title._id} title={title} />
            } else {
                return null;
            }
        });
    }

    return(
        <div className="titles-container">
            {generateTitles(props.data)}
        </div>
    );
}

// exports
export default Titles;