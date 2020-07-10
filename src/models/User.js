const URL = `http://localhost:3001/auth`;

class User {
    static create(data) {
        return fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }

    static login(credentials) {
        return fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(credentials)
        }).then(res => res.json());
    }

    static logout() {
        TODO
    }
}