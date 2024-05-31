
# MOVIE LIBRARY

## Project Description
1. The application has user authentication ( Sign In/ Sign Up )
2. After logging in users will be navigated to the home screen where they should see a search
option where they can search movies and see details of those movies.
3. They can create a list of movies by adding the movies to lists. ( Similar to youtube playlists ).
On the home page, different movie lists created by that user will be displayed.
4. These lists can be either public ( anyone with a link to the list can see this ) or private ( only
the person who created can see this list )
5. Used OMDB API for the movie search option.
6. The Search & List page has a nice layout.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
- [Running the Project](#running-the-project)
- [Available Scripts](#available-scripts)
  
## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js installed on your machine (https://nodejs.org/)
- npm (comes with Node.js) or yarn installed on your machine
- A Firebase project set up with a Google OAuth provider. You'll need the Firebase configuration object.

## Project Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Fasal.git
   cd Fasal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Set up Firebase**
   Create a `.env` file in the root of the project and add your Firebase configuration. It should look like this:
   ```
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```

## Running the Project
1. **Start the development server**
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

   This will start the development server and open the application in your default web browser.

## Available Scripts
In the project directory, you can run:

- `npm start` or `yarn start`: Runs the app in development mode.
- `npm run build` or `yarn build`: Builds the app for production to the `build` folder.
- `npm test` or `yarn test`: Launches the test runner in the interactive watch mode.
- `npm run eject` or `yarn eject`: Ejects the Create React App configuration.
