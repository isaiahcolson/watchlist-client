// back end watchlist api url
const URL = 'http://localhost:3001/watchlists';

// class for Watchlist model that fetches watchlists from database
class Watchlist {
    static show = (watchlistId) => {
        return fetch(`${URL}/${watchlistId}`).then((response) => response.json());
    }
}

// exports
export default Watchlist;