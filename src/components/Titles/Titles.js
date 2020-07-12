// imports
import React from 'react';
import TitleCard from './TitleCard';
import './Titles.css';

// component that generates all titles in database
const Titles = (props) => {
    function generateTitles(titles) {
        return titles.map((title) => {
            return <TitleCard key={title._id} title={title} />
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