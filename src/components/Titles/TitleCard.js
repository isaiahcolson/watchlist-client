// imports
import React from 'react';
import {Link} from 'react-router-dom';
import './TitleCard.css';

// component that renders title data
const TitleCard = (props) => {
    const {posterImage, _id, name} = props.title;
    
    return(
        <Link to={`/titles/${_id}`}>
            <div className="poster">
                <img src={posterImage} alt={name} />
            </div>
        </Link>
    )
}

// exports
export default TitleCard;