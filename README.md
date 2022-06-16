

# What is Northcoders News?

Northcoders News is a mobile-first web application made with React. It is designed to be the front-end of a news app with similar functionality to Reddit.com. The app consumes my [Northrcoders News API](https://github.com/caolanhamilton/NC-News) to fetch its data.

The home page of the app presents users with a preview of all articles which can be filtered by topic using the nav bar and reordered using the drop-down menus. Clicking on an article preview brings the user to an article page, where the full article text is displayed. The user can like or dislike the article they are reading and also create, view and delete comments. 

The App makes use of:
 - React Hooks like useState, useEffect and useContext
 - React Router
 - API data fetching with Axios
 - Responsive CSS and mobile first design
 - Form validation
 - Optimistic rendering
 - Conditional rendering

## Live version!

You can find a live version of Northcoders News hosted on Netlify by clicking here:

[https://caolanhamiltonncnewsfrontend.netlify.app/](https://caolanhamiltonncnewsfrontend.netlify.app/)

You can view the app using any modern mobile or desktop browser such as Chrome or Safari.

## Cloning & running locally

If you'd like to run the app locally you can clone this repo by pasting the following code snippet into your terminal.  Ensure you are inside the directory you wish to clone into first.

    git clone https://github.com/caolanhamilton/nc-news-fe.git

## Minimum requirements and dependencies

Northcoders News was made using node v17.1.0, it is recommended you use at least this version to run the app locally. You can download node [here](https://nodejs.org/en/download/current/).

Once you have a local copy of the repo and Node installed you will need to install a few dependencies. I have listed these packages below along with the command to install them:

 - axios: `npm  i axios`
 - dayjs `npm i -d jest-extended`
 - react-dom `npm i react-dom`
 - react-router-dom `npm i react-router-dom`
 - react-scripts `npm i react-scripts`

You are now ready to run the app! Open terminal, `cd` into the directory where you cloned the app and run the command `npm start`. The app should now run in your browser.
