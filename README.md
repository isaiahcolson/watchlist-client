# Watch Later
'Watch Later' is a web app for users to track movies and shows that they want to add to their watch list.

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
* email
* password
* watchlist

### Titles
* name
* release year
* type(movie or show)
* rating
* image
* genre

### ERD
<!-- TODO place image reference to ERD drawio -->



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

### Phase 2 (Fri Jul 10 - Mon Jul 13)
* style nav
* style landing page
* style auth page
* add form validation
* link titles in titles page to titles show pages

### Phase 3 (Mon Jul 13 - Tue Jul 14)
* hide pages to unauthenticated users
* user can click title on titles page and add to their watchlist
* show watchlist with user's titles on profile page
* style account info section of profile page
* style watchlist section of profile page

### Phase 4 (Wed Jul 15 - Thur Jul 16)
* user can manually order their watchlist
* style titles page
* section by genre on titles page
* add 404 catch route

### Stretch
* user can edit their account
* create show page for titles
* section by type on titles page
* user can create multiple lists

- [ ] add react flowchart to ERD picture
- [ ] in back end in signup route, db.Watchlist.create a default Watchlist and set user id to token, this will give a default watchlist for the user
- [ ] for page gatekeeping, add props.currentUser in routes for pages that I want hidden, like how we did for the navbar
- [ ] setup Watchlist show route
- [ ] setup Watchlist update route
- [ ] setup Watchlist delete route
- [ ] setup Watchlist create route
- [ ] change favicon

<!-- Here is the link for github README markdown https://guides.github.com/features/mastering-markdown/ -->