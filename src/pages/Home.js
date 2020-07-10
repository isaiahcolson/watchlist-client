// imports
import React from 'react';
import TitleModel from '../models/title';
import Titles from '../components/Titles/Titles';

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
            <Titles data={this.state.titles} />
        );
    }
}

// exports
export default Home;