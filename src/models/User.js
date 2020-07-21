// back end user api url
const URL = `https://dashboard.heroku.com/apps/isaiahcolson-watchlist-api/auth`;

// class for User model that fetches users from database
class UserModel {
    static create(data) {
        return fetch(`${URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }

    static login(credentials) {
        return fetch(`${URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }).then(res => res.json());
    }

    static destroy(userId) {
        return fetch(`${URL}/${userId}`, {
            method: "Delete"
        }).then((res) => res.json());
    }

    static profile(data) {
        return fetch(`${URL}/profile`, {
            headers: {
                "Content-Type": "application/json",
                "authorization": `bearer ${localStorage.getItem('uid')}`
            }
        }).then(res => res.json());
    }
}

// exports
export default UserModel;