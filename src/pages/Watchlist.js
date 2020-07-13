import React from 'react';
import WatchlistModel from '../models/Watchlist';
import WatchlistCard from '../components/Watchlist/WatchlistCard';
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
            this.setState({titles: json.watchlist.titles})
        });
    }

    render () {
        return(
            <div className="watchlist-container">
                <p>You are on the watchlist page.</p>
                <p>Title: </p>
                <WatchlistCard />
            </div>
        );
    }
}

export default Watchlist;