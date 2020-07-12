// imports
import React from 'react';
import {Link} from 'react-router-dom';

// component that renders title data
const TitleCard = (props) => {
    const {name, _id} = props.title;
    
    return(
        <Link to={`/titles/${_id}`}>
            <div>
                <p>{name}</p>
            </div>
        </Link>
    )
}

// exports
export default TitleCard;