// imports
import React from 'react';

// component that renders title data
const TitleCard = (props) => {
    const {name} = props.title;
    return(
        <div>
            <p>{name}</p>
        </div>
    )
}

// exports
export default TitleCard;