# Getting Started

To use this template, follow these steps:

## Configure Database

-   Modify name in package.jsons - find all 'ts-mern-template' and replace with the name of the database you'd like to use
-   Modify references to database - find all 'ts-mern-template-db' and replace with the name of the database you'd like to use
-   If you want to use a local data base, update the line in server\db\conn.js to look like: const Db = process.env.ATLAS_URI || 'mongodb://localhost/ts-mern-template-db'
-   If you're keeping the boilerplate routes from record.js, update the collection name 'records' as necessary

## Env Variables

Create a new file '.env' in /client directory. Add the following lines. Ther are needed for react-script's chokidar from watching locked files on the C:/ drive

CHOKIDAR_USEPOLLING=true
WATCHPACK_POLLING=true

Create a new file 'config.env' in /server directory. Add the following lines, making sure to replace Username, UrlEncodedPassword, and DatabaseName: \

    ATLAS_URI=mongodb+srv://Username:UrlEncodedPassword@cluster0.ld7dh.mongodb.net/?retryWrites=true&w=majority \
    ATLAS_DATABASE_NAME=DatabaseName \
    PORT=3001

## Formatting & TS errors

-   Make sure you have the Prettier extension installed if you'd like to use it.
-   Modify .prettierrc and .prettierignore as necessary
-   Modify client/tsconfig.json as needed

# Deploying your application

## Deploying to Heroku

-   This template was build to be deployed in one piece to Heroku - the frontend will be served by the express server (see server.ts).
-   Heroku provides documentation on how to deploy Node.js servers here: https://devcenter.heroku.com/articles/deploying-nodejs.

# General Information

## Available Scripts

In the root project directory, you can run:

### `npm install`

Installs dependencies in root directory, client directory, and server directory.

### `npm run dev`

Runs the app in the development mode with concurrently. It will run the client on localhost:3000 and the server on localhost:3001.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run pretty`

Formats all js,jsx,json,ts,tsx with prettier

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
