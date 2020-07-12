// imports
import React from 'react';
import TitleModel from '../models/title';

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
            this.props.history.push('/titles');
        });
    }

    render() {
        return(
            <div>
                <h1>{this.state.title.name}</h1>
            </div>
        );
    }
}

export default TitleShow;