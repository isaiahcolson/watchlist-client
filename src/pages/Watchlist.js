import React from 'react';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import WatchlistModel from '../models/Watchlist';
import WatchlistContainer from '../components/Watchlist/WatchlistContainer';
import './watchlist.css';

// component that generates users titles in watchlist
class Watchlist extends React.Component {
    state = {
        titles : []
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        WatchlistModel.show(this.props.match.params.id).then((json) => {
            this.setState({titles: json.watchlist.titles});
        });
    }

    render () {
        return(
            <DragDropContext >
                <div className="watchlist">
                    {this.state.titles.length > 0 &&
                        <Droppable droppableId="1">
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps} >
                                    <WatchlistContainer titles={this.state.titles} />
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    }
                </div>
            </DragDropContext>
        );
    }
}

export default Watchlist;