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
![Watch Later Wireframes]('/public/WL-wireframes.png')

### Design References/ Styling
![Watch Later Creative Assets]('/public/WL-creative-assets.png')



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
* project initialization
[x] start front end
[x] start back end
* setup server
[x] setup server.js PORT
[x] add watchlist model to ERD
* create Title model
[x] create Title Schema
[x] connect to mongoose
[x] setup Title show route
* visible navbar across all pages
[x] setup react structure
[x] setup navbar
* create routes
[x] link routes in react
[x] create pages folder
[x] add page files in pages folder with boilerplate react
[x] test routes
* add title data reference
[x] add 2 movies and 2 shows
* connect front end and back end
[x] seed data ref file
[x] test database in insomnia
[x] create models folder with model file in src
[x] fetch all title data
* show titles on titles page
[x] create titles component folder and primary component file
[x] create TitleCard component that renders a title
[x] create Titles component that renders all titles
[x] render TitleCard on Home page
* add user model
[x] create user model
[x] add auth.js in controllers
[x] update titles controller
[x] update User model with json info
[x] verify model index info
[x] verify server info
* user auth
[x] watch token lecture
[x] add middleware folder with authRequired.js
[x] export auth in controllers index
[x] add routes auth.js
[x] add auth.js to routes index.js
[x] add auth routes to server
[x] add token to controllers auth.js
[x] add authRequired.js
[x] update routes with authRequired
* user forms
[x] initialize User model
[x] add content to login page
[x] add content to register page
[x] add form to signup page
[x] add form to login page
[x] add user model fetch
[x] import user model in register page
[x] add user data to App.js
[x] update config routes to send data
[x] add fetch for login in user model
[x] add handle submit function to login page
[x] add logout function to App
[x] hide parts of nav for users/ non-users
[x] add logout to user model



* add watchlist model
[X] create watchlist model
[x] reference watchlist model in user model
* add README to front end repo
* go through code, clean out unused comments and add helpful ones





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

[ ] setup Watchlist show route
[ ] setup Watchlist update route
[ ] setup Watchlist delete route
[ ] setup Watchlist create route
[ ] change favicon

<!-- Here is the link for github README markdown https://guides.github.com/features/mastering-markdown/ -->