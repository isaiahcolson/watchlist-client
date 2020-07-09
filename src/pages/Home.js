import React from 'react';

import TitleModel from '../models/title';
import Titles from '../components/Titles/Titles';

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

export default Home;