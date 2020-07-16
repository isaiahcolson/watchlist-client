// imports
import React from 'react';
import TitleModel from '../models/title';
// import Titles from '../components/Titles/Titles';
import MovieFilter from '../components/Titles/TitleFilter/MovieFilter';

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
            <MovieFilter data={this.state.titles} />
        );
    }
}

// exports
export default Home;