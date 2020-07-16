// imports
import React from 'react';
import TitleModel from '../models/title';
// import Titles from '../components/Titles/Titles';
import MovieFilter from '../components/Titles/TitleFilter/MovieFilter';
import './Home.css';

// home page for auth users
class Home extends React.Component {
    state = {
        titles: []
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        TitleModel.all().then((json) => {
            this.setState({titles: json.titles});
        });
    }

    render() {
        return(
            <div className="home">
                <div className="title-filter">
                    <h2>All Movies</h2>
                    <div>
                        <MovieFilter data={this.state.titles} />
                    </div>
                </div>
                <div className="title-filter">
                    <h2>All Movies</h2>
                    <div>
                        <MovieFilter data={this.state.titles} />
                    </div>
                </div>
            </div>
        );
    }
}

// exports
export default Home;