import React from 'react';
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
            <div className="watchlist-container">
                <p>You are on the watchlist page.</p>
                {this.state.titles.length > 0 && <WatchlistContainer titles={this.state.titles} />}
            </div>
        );
    }
}

export default Watchlist;