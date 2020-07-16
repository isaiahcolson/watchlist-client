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

    onDragEnd = result => {
        const {destination, source} = result;
        // console.log(this.state.titles);
        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }
        const watchlist = this.state.titles;
        // console.log(watchlist);
        const moveMovie = watchlist.splice(source.index, 1);
        watchlist.splice(destination.index, 0, ...moveMovie);
        // console.log(watchlist);
        this.setState({titles: watchlist});
    }

    render () {
        return(
            <DragDropContext onDragEnd={this.onDragEnd} >
                <div className="watchlist">
                    <h2>My Watchlist</h2>
                    {this.state.titles &&
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