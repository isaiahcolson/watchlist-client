// imports
import React from 'react';
import {Link} from 'react-router-dom';
import TitleModel from '../models/title';
import UserModel from '../models/User';
import WatchlistModel from '../models/Watchlist';
import './TitleShow.css';

// title show container
class TitleShow extends React.Component {
    state = {
        title: null,
        user: null
    }

    componentDidMount() {
        this.fetchData();
        this.fetchUserData();
        // console.log(this.props.userData);
    }

    fetchData = () => {
        TitleModel.show(this.props.match.params.id).then((json) => {
            this.setState({title: json.title});
        });
    }

    fetchUserData = () => {
        UserModel.profile(this.props.currentUser).then((json) => {
            this.setState({user: json.user});
        });
    }

    addTitle = (event) => {
        event.preventDefault()
        WatchlistModel.update(this.state.user.watchlists[0], this.state.title._id)
        .then((json) => {
            console.log(json);               
        });
    }

    render() {
        return(
            <div className="title-container">
                {this.state.title ? (
                    <div>
                        <div className="title-coverImage">
                            <img src={this.state.title.coverImage} alt={this.state.title.name}/>
                        </div>
                        <div className="title-posterImage">
                            <img src={this.state.title.posterImage} alt={this.state.title.name}/>
                        </div>
                        <div className="title-info">
                            <div className="title-info__header">
                                <h2>{this.state.title.name}</h2>
                                <h2>{this.state.title.rating}</h2>
                                {this.state.user ?
                                    <div>
                                        <Link to={`/watchlists/${this.state.user.watchlists[0]}/add`}>Add</Link>
                                        <button onClick={this.addTitle}>Add</button>
                                    </div>
                                :
                                    <p>Loading...</p>
                                }
                            </div>
                            <div className="title-info__sub">
                                <div className="title-info__stats">
                                    <p>{this.state.title.releaseYear}</p>
                                    <p>{this.state.title.mpaaRating}</p>
                                    <p>{this.state.title.timeLength}</p>
                                </div>
                                <p>{this.state.title.genres}</p>
                            </div>
                        </div>
                        <div className="title-content">
                            <h4>Storyline</h4>
                            <p>{this.state.title.storyline}</p>
                        </div>
                        
                        
                        {/* <p>{this.props.userData.username}</p> */}
                        {/* <p>{this.state.user}</p> */}
                    </div>
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        );
    }
}

export default TitleShow;