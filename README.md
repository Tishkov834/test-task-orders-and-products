Application Name: Orders & Products

Installation
1. Clone the repository: git clone https://github.com/Tishkov834/test-task-orders-and-products.git
2. Install dependencies: npm install

Usage

1. Run the front-end application: npm run start
2. Make sure that your server side is set up and running successfully local on
   http://localhost:3003 

Folder Structure

1. public: Contains the public assets and the HTML template file used for rendering the React application.

2. src: The main source code directory where most of the application code resides.
    1. components: Contains React components that are used across different parts of the application.
    2. pages: Contains the top-level components that represent the different pages or views of the application.
    3. assets: Stores static assets such as svg files used in the application.
    4. redux: Contains files related to the Redux state management, including actions, reducers, and store configuration.
    5. api: Contains the api calls functions.
    6. constants: Contains the general data information such as endpoints and enums.
    7. customHooks: Contains custom hooks that are used all across the application. 
    8. helpers: Contains the general functions that are used all across the application.
    9. types: Contains the general types that are used all across the application.
    10. index.tsx: The entry point of the application where React is rendered into the HTML template.

3. package.json: The manifest file that lists the project's dependencies, scripts, and other metadata.
4. README.md: The readme file containing information about the project, its setup, and usage instructions.

Technologies Used

React
TypeScript
Redux
React Router
Axios
Json-server
