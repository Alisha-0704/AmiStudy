  ## AMISTUDY
  *A place to find your best studymate* 
### Build a AMISTUDY with MERN Stack (MongoDB, Express, React, Node JS)

### Back-End:
   * Database: MongoDB
  * Back-end JS framework: NodeJS
  * Server side: Express JS
   * Connect to MongoDB use Mongooes
#### Front-End:

* npx create-react-app 
* add project in firebase "amistudy"
* cd amistudy, then npm start
 * del 'App.test.js', 'logo.svg', 'setupTests.js'
* npm i react-tinder-card after created TinderCards.js
* create Express server which connect to MongoDB, pull all data from there.
* create 'backend' in the same folder level as 'amistudy'
* cd backend then npm init
* 'index.js' for entry point
* in created 'package.json' backend stuff like import is ES6, to get that in node.js under "main:" add "type": "module",
* under "test:" add "start": "node index.js" then create index.js
* install all dependencies, npm i express mongooes or npm install express mongoose
* go to MongoDB, build a new project
* terminal cd backend then npm i -g nodemon
* nodemon server.js, then go to localhost:3001, now you have API endpoint, then connect to DB
 * Back to MongoDB -> DB Access -> Add new DB user -> create user name and pw (save yourself) -> Add User
* Network Access -> Add IP Address to allow list -> Allow access from anywhere -> confirm
* go Clusters -> CONNECT -> Connect your application -> you get url to connect to DB -> fill "<pw>" and "<db>" name
* Create database schema -> "user.js"
* add Middlewares in index.js
* npm i cors cors is adding headers to every request, a security prerequisite when you have things deployed online
 * added cors and nodemon server.js again
* open postman (interact with servers backend stuff) in local to check our API if they are working correctly - get new "+" tab, and type the http://localhost:3001/      and http://localhost:3001/ 
    

 * Hook up to front-end, go to front-end terminal and stop it then npm i axios, then npm start
 * After that go MongoDB and check collections, all data are there


#### FOR FRONTEND

 #### we have used reactjs for fast working.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

*Note: this is a one-way operation. Once you `eject`, you can't go back!*

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).





