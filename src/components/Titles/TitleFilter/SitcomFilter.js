// imports
import React from 'react';
import TitleCard from '../TitleCard';
import '../Titles.css';

// component that generates all titles in database
const SitcomFilter = (props) => {
    function generateTitles(titles) {
        return titles.map((title) => {
            if (title.genres.includes("Sitcom")) {
                return (
                    <div className="title" key={title._id}>
                        <TitleCard title={title} />
                    </div>
                )} else {
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
export default SitcomFilter;