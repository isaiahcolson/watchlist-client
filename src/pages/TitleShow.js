// imports
import React from 'react';
// import {Link} from 'react-router-dom';
import TitleModel from '../models/title';
import UserModel from '../models/User';
import WatchlistModel from '../models/Watchlist';
import './TitleShow.css';

// title show container
class TitleShow extends React.Component {
    state = {
        title: null,
        user: null,
        add: true
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
            this.setState({add: true});             
        });
    }

    removeTitle = (event) => {
        event.preventDefault()
        WatchlistModel.updateRemove(this.state.user.watchlists[0], this.state.title._id)
        .then((json) => {
            this.setState({add: false});              
        });
    }

    render() {
        return(
            <div className="title-container">
                {this.state.title ? (
                    <div>
                        <div className="title-coverImage">
                            <img src="/WL-titleshow-cover.png" alt="Title Cover"/>
                            <img src={this.state.title.coverImage} alt={this.state.title.name}/>
                        </div>
                        <div className="title-posterImage">
                            <img src={this.state.title.posterImage} alt={this.state.title.name}/>
                        </div>
                        <div className="title-info">
                            <div className="title-info__header">
                                <h2>{this.state.title.name}</h2>
                                <h2>{this.state.title.rating}<i className="fas fa-star"></i></h2>
                                {this.state.user ?
                                    <div>
                                        {this.state.add ?
                                            <button onClick={this.removeTitle}><i className="fas fa-minus-circle"></i></button>
                                        :
                                            <button onClick={this.addTitle}><i className="fas fa-plus-circle"></i></button>
                                        }
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
                                <p>{this.state.title.genres[0] + ", " + this.state.title.genres[1] + ", " + this.state.title.genres[2]}</p>
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
                <div className="underlay"></div>
            </div>
        );
    }
}

export default TitleShow;