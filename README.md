# Watch Later
'Watch Later' is a web app for users to track movies and shows that they want to add to their watch list. I have noticed that there are no streaming services, that I am aware of, that offer manual ordering for user's watchlists. I was recently frustrated that Netflix offered a manual ordering, but it isn't truly manual, there are still unseen factors that are in play. For my capstone project, I set out to create a way to track your watchlist and put it in the order that you want it.

The back end watchlist api can be referenced through [this repo](https://git.generalassemb.ly/colsonisaiah/watchlist-api).
<!-- TODO add link to final deployed project -->
[Here]() is the final deployed project on Heroku.



## MVP
As a member of 'Watch Later', a user can log in to their account and view a list of movies and shows. The user can scroll through the movies and shows and add individual titles to their watch list. They can view their watch list, which will hold all titles that they have chosen to add.

### Built With
* Mongoose
* Express
* React
* Nodejs

### Installation
To install and run this site locally:
1. Clone this project, don't forget the API repo as well
2. Setup the back end
    * In back end terminal run ```npm i```
    * ```node seed.js```
    * ```npm start```
3. Setup the front end
    * In front end terminal ```npm start```
4. Run MongoDB
    * In new terminal run ```mongod```
    * Or you may need to run ```brew services start mongodb-community@4.2```




## Wireframe/ Design

### Wireframe
![Watch Later Wireframes](/public/WL-wireframes.png)

### Design References/ Styling
![Watch Later Creative Assets](/public/WL-creative-assets.png)



## User Stories

### Non-Authenticated Users
1. Register
    * shown a landing page with service information
    * able to click link to register for an account
    * enter email, username, firstname, lastname, password
    * click 'Sign Up' to confirm registration and be redirected to login page

### Authenticated Users
1. Login
    * shown a landing page with service information
    * able to click link to login to existing account
    * enter username and password
    * click 'Log In' to confirm log in and be redirected to titles page

2. Titles Page
    * user will be able to see all movie and show titles
    * can scroll through lists of titles filtered by genre
    * can select a title and add to watchlist
    * can click profile to view profile information and watchlist

3. Profile
    * can view and update account information
    * able to click link to watchlist

4. Watchlist
    * shows list of titles the user has selected from the titles page
    * able ot manually sort titles by user preference
    * can remove titles from list

5. Logout
    * user can see logout icon in the navigation
    * can click icon to logout of account



## Data Models & ERD

### Users
* first name
* last name
* username
* email
* password
* watchlists (ref Watchlist model)

### Watchlist
* name
* titles (ref Title model)

### Titles
* name
* release year
* media type (movie or show)
* rating
* cover image
* genres

### ERD
![Watch Later Creative Assets](/public/WL-models.png)



## Development Timeline

### Phase 1 (Wed Jul 8 - Fri Jul 10)
* project initialization, start front and back end
* setup server PORT
* create Title model with Schema, connect to mongoose, setup Title show route
* setup react structure, setup navbar
* link routes in react with boilerplate JSX
* add 2 movies and 2 shows for seeded data in titleData.json
* connect front end and back end, fetch all title data
* create TitleCard component that renders Titles component, create Titles component that renders all title names
* add User model
* add authRequired middleware for back end, add auth to routes, add token to auth controller
* add content to login and register pages, add user model fetch
* users can register and login to accounts
* hide parts of nav for users/ non-users, add logout function
* ref Watchlist model to User model, ref Title model to Watchlist model
* go through code, clean out unused comments and add helpful ones, remove tasks

### Phase 2 (Fri Jul 10 - Sun Jul 12)
* style nav, create logo
* style landing page, create landing page image
* style signup page, style input area, create signup image
* style login page, flip image and form content, create differenct image for login, add to login page
* link titles in titles page to titles show pages, create show page
* style nav for mobile
* style landing for mobile, add call to action
* style signup for mobile
* style login for mobile

### Phase 3 (Mon Jul 13 - Tue Jul 14)
* redo profile wireframe, change navbar for users to show watchlist and profile
* show user info on profile page, move logout button to profile page, add link to watchlist page
* create watchlist page, add watchlist to models
* user can click title on titles show page and add to their watchlist
* add wireframe for titles show page
* style titles show page, add posterImage, timeLength, storyline, mpaaRating to title model
* user can remove title from watchlist, replace add button with remove button if watchlist has title in it
* change navbar watchlist link to user's watchlist
* style profile page, add delete route for profile, show users title information
* increase seeded data to 25 movies and 25 shows

### Phase 4 (Wed Jul 15 - Thur Jul 16)
* user can manually order their watchlist
* style watchlist page, allow drag and drop for watchlist
* add 10 movies and 10 shows of seeded data
* style titles page, section by genre and types, display titles in horizontal row with overflow scroll
* increase seeded data to 50 movies and 50 shows
* finish title show page, increase side margins of storyline on titles show page, change button to be "+ Watchlist", style titles show page for mobile
* titles page, add featured title banners, style titles page for mobile
* final touches, finalize styling and MVP
* deploy project

### Stretch
* add extra info to landing page
* add related titles to bottom of title show page
* add button on title card that will add or remove titles from watchlist
* hide pages to unauthenticated users
* add form validation
* user can edit their account
* add 404 catch route
* add profile photo for user
* user can create multiple lists

<!-- Seeded Data Templage -->
<!-- 
    {
        "name": "",
        "rating": ,
        "releaseYear": ,
        "mpaaRating": "",
        "timeLength": "",
        "mediaType": "",
        "posterImage": "",
        "coverImage": "",
        "genres": [],
        "storyline": ""
    },
 -->