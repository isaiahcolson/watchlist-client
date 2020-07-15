// imports
import React from 'react';
import {Link} from 'react-router-dom';
import {Draggable} from 'react-beautiful-dnd';
import './WatchlistCard.css';

// component that renders watchlist titles
const WatchlistCard = (props) => {
    const {name, posterImage, _id} = props.title;

    return(
        <Draggable draggableId={_id} index={props.index} >
            {(provided) => {
                // console.log(provided);
                return(

                    <div className="card-container"
                        {...provided.draggableProps} {...provided.dragHandleProps}
                        ref={provided.innerRef} >
                            <div>
                                <Link to={`/titles/${_id}`}>
                                    <img src={posterImage} alt={name} />
                                </Link>
                            </div>
                    </div>
                );
            }}
        </Draggable>
    );
}

export default WatchlistCard;