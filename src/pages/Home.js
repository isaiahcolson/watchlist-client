// imports
import React from 'react';
import TitleModel from '../models/title';
import {Link} from 'react-router-dom';
// import Titles from '../components/Titles/Titles';
import MovieFilter from '../components/Titles/TitleFilter/MovieFilter';
import ShowFilter from '../components/Titles/TitleFilter/ShowFilter';
import ActionFilter from '../components/Titles/TitleFilter/ActionFilter';
import ComedyFilter from '../components/Titles/TitleFilter/ComedyFilter';
import DramaFilter from '../components/Titles/TitleFilter/DramaFilter';
import CrimeFilter from '../components/Titles/TitleFilter/CrimeFilter';
import AnimationFilter from '../components/Titles/TitleFilter/AnimationFilter';
import MysteryFilter from '../components/Titles/TitleFilter/MysteryFilter';
import AdventureFilter from '../components/Titles/TitleFilter/AdventureFilter';
import FantasyFilter from '../components/Titles/TitleFilter/FantasyFilter';
import HistoryFilter from '../components/Titles/TitleFilter/HistoryFilter';
import HorrorFilter from '../components/Titles/TitleFilter/HorrorFilter';
import RomanceFilter from '../components/Titles/TitleFilter/RomanceFilter';
import SciFiFilter from '../components/Titles/TitleFilter/Sci-FiFilter';
import SitcomFilter from '../components/Titles/TitleFilter/SitcomFilter';
import ThrillerFilter from '../components/Titles/TitleFilter/ThrillerFilter';
import WarFilter from '../components/Titles/TitleFilter/WarFilter';
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
                    <h2>Action</h2>
                    <div>
                        <ActionFilter data={this.state.titles} />
                    </div>
                </div>
                <div className="title-filter">
                    <h2>Fantasy</h2>
                    <div>
                        <FantasyFilter data={this.state.titles} />
                    </div>
                </div>
                <div className="title-filter">
                    <h2>Comedy</h2>
                    <div>
                        <ComedyFilter data={this.state.titles} />
                    </div>
                </div>
                <div className="title-feature">
                    <Link to='/titles/5f109d182070fa288dc87d8c'>
                        <img src="/WL-feature1.png" alt="Mandalorian Feature"/>
                    </Link>
                </div>
                <div className="title-filter">
                    <h2>Sci-Fi</h2>
                    <div>
                        <SciFiFilter data={this.state.titles} />
                    </div>
                </div>
                <div className="title-filter">
                    <h2>Adventure</h2>
                    <div>
                        <AdventureFilter data={this.state.titles} />
                    </div>
                </div>
                <div className="title-filter">
                    <h2>Drama</h2>
                    <div>
                        <DramaFilter data={this.state.titles} />
                    </div>
                </div>
                <div className="title-feature">
                    <Link to='/titles/5f109d182070fa288dc87d96'>
                        <img src="/WL-feature2.png" alt="Spiderverse Feature"/>
                    </Link>
                </div>
                <div className="title-filter">
                    <h2>Mystery</h2>
                    <div>
                        <MysteryFilter data={this.state.titles} />
                    </div>
                </div>
                <div className="title-filter">
                    <h2>Romance</h2>
                    <div>
                        <RomanceFilter data={this.state.titles} />
                    </div>
                </div>
                <div className="title-filter">
                    <h2>Crime</h2>
                    <div>
                        <CrimeFilter data={this.state.titles} />
                    </div>
                </div>
                <div className="title-feature">
                    <Link to='/titles/5f109d182070fa288dc87d60'>
                        <img src="/WL-feature3.png" alt="Joker Feature"/>
                    </Link>
                </div>
                <div className="title-filter">
                    <h2>Animation</h2>
                    <div>
                        <AnimationFilter data={this.state.titles} />
                    </div>
                </div>
                <div className="title-filter">
                    <h2>War</h2>
                    <div>
                        <WarFilter data={this.state.titles} />
                    </div>
                </div>
                <div className="title-filter">
                    <h2>Thriller</h2>
                    <div>
                        <ThrillerFilter data={this.state.titles} />
                    </div>
                </div>
                <div className="title-feature">
                    <Link to='/titles/5f109d182070fa288dc87da5'>
                        <img src="/WL-feature4.png" alt="Crown Feature"/>
                    </Link>
                </div>
                <div className="title-filter">
                    <h2>History</h2>
                    <div>
                        <HistoryFilter data={this.state.titles} />
                    </div>
                </div>
                <div className="title-filter">
                    <h2>Horror</h2>
                    <div>
                        <HorrorFilter data={this.state.titles} />
                    </div>
                </div>
                <div className="title-filter">
                    <h2>Sitcom</h2>
                    <div>
                        <SitcomFilter data={this.state.titles} />
                    </div>
                </div>
                <div className="title-feature">
                    <Link to='/titles/5f109d182070fa288dc87d70'>
                        <img src="/WL-feature5.png" alt="Boys Feature"/>
                    </Link>
                </div>
                <div className="title-filter">
                    <h2>All Movies</h2>
                    <div>
                        <MovieFilter data={this.state.titles} />
                    </div>
                </div>
                <div className="title-filter">
                    <h2>All Shows</h2>
                    <div>
                        <ShowFilter data={this.state.titles} />
                    </div>
                </div>
            </div>
        );
    }
}

// exports
export default Home;