import React from 'react';

const TitleCard = (props) => {
    const {name} = props.title;
    return(
        <div>
            <p>{name}</p>
        </div>
    )
}

export default TitleCard;