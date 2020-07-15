import React from 'react';
import TitleModel from '../../models/title';
import './profiletitle.css';
import { Link } from 'react-router-dom';

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
                        <Link to={`/titles/${this.state.title._id}`}><img src={this.state.title.posterImage} alt={this.state.title.name}/></Link>
                        {/* <p>{this.state.title.name}</p> */}
                    </div>
                :
                    <p></p>
                }
            </div>
        );
    }
}

export default ProfileTitle;