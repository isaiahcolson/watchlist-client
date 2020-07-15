import React from 'react';
import TitleModel from '../../models/title';
import './profiletitle.css';

class ProfileTitle extends React.Component {
    state = {
        title: null
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        TitleModel.show(this.props.titleId).then((json) => {
            this.setState({title: json.title});
        });
    }

    render() {
        return(
            <div>
                {this.state.title ?
                    <div className="protitle-container">
                        <img src={this.state.title.posterImage} alt={this.state.title.name}/>
                        <p>{this.state.title.name}</p>
                    </div>
                :
                    <p>There are no titles</p>
                }
            </div>
        );
    }
}

export default ProfileTitle;