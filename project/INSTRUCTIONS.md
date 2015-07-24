## What're we doing?

We're going to create a server that fits the front-end developed in the public/index.html file. This app allows you to add users by name, favorite number, and whether they are starred. You can see all users or search for a user by name.

## Objectives

* Edit the gulpfile.js to lint and run jscs on your project code, and run all tests in /tests
* Write a static server using Hapi to view the web app
* Write a Node Module that interfaces with an in-memory database
    * Write a function that stores users
    * Write a function that returns all users
    * Write a function that returns a specific user by name
* Write a POST route that accepts the new user form data and saves it
* Write a GET route that returns all users
* Write a GET route that returns users by name
* Add some validation to your POST route using Joi
* Add validation to your GET /user route with Joi
* Write some unit tests with Mocha
* Return proper status codes and messages from your routes
    * example: GET /user with a name that doesn't return any users returns a 404

## The API we need

### GET /users

parameters: none

Returns all users currently in the data store

### GET /user

paramaters: name-- the name of the user you'd like to find

Returns either a user if one is found in the database with a matching name, or a 404 if no user with that name is found.

### POST /user

parameters:

* name: string, required-- name of the user
* favoriteNumber: number, required-- the user's favorite number
* starred: boolean, required-- whether this user is starred
