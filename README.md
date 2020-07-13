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
* redo profile wireframe
- [x] change navbar for users to show watchlist and profile
- [x] update typography sheet with new sizes
* show user profile name on profile page
- [x] push everything down for now
- [ ] show user name
- [ ] move logout button to profile page





* create watchlist page
- [ ] in back end in signup route, db.Watchlist.create a default Watchlist and set user id to token, this will give a default watchlist for the user





* user can click title on titles page and add to their watchlist





* update watchlist with user's titles





* style account info section of profile page





* style watchlist section of profile page





* increase seeded data to 25 movies and 25 shows





* add wireframe for titles show page





* style titles show page





* hide pages to unauthenticated users
- [ ] for page gatekeeping, add props.currentUser in routes for pages that I want hidden, like how we did for the navbar

### Phase 4 (Wed Jul 15 - Thur Jul 16)
* user can manually order their watchlist
* style titles page
* section by genre on titles page
* add 404 catch route
* add form validation
- [ ] add submit button disabled styling
- [ ] add submit button logic
- [ ] add signup error messages for invalid fields
- [ ] add login error messages for invalid fields
* final touches
- [ ] add react flowchart to ERD picture
- [ ] change favicon
- [ ] update README with new wireframes
- [ ] update README with final design assets
* deploy project

### Stretch
* add button on title card that will add or remove titles from watchlist
* user can edit their account
* add profile photo for user
* section by type on titles page
* style profile page for mobile
* style titles show page for mobile
* style nav for 4k
* style landing for 4k
* style signup for 4k
* style login for 4k
* user can create multiple lists
- [ ] setup Watchlist show route
- [ ] setup Watchlist update route
- [ ] setup Watchlist delete route
- [ ] setup Watchlist create route

<!-- Here is the link for github README markdown https://guides.github.com/features/mastering-markdown/ -->