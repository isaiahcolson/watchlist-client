import React from 'react';

import TitleCard from './TitleCard';

const Titles = (props) => {
    function generateTitles(titles) {
        return titles.map((title) => {
            return <TitleCard key={title._id} title={title} />
        });
    }

    return(
        <div>
            {generateTitles(props.data)}
        </div>
    );
}

export default Titles;