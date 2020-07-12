// imports
import React from 'react';
import TitleModel from '../models/title';
import './TitleShow.css';

// title show container
class TitleShow extends React.Component {
    state = {
        title: null
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        TitleModel.show(this.props.match.params.id).then((json) => {
            this.setState({title: json.title});
        });
    }

    render() {
        return(
            <div className="titleshow-container">
                {this.state.title ? (
                    <h1>{this.state.title.name}</h1>
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        );
    }
}

export default TitleShow;