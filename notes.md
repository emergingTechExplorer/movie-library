nodemon will automatically refresh and restart the server everytime we make a change

"start": "node server.js" will start the server on a production environment without nodemon

controllers and routes are the same thing

index route is for when we don't have any resource or model in the URL

layout.ejs will have boilerplate HTML for every page of the application

dotenv library will allow us to load environment variables into the application

partials folder will contain all the template files that aren't related to routes. They are just partials that we include into our other files. It allows you to import these small files into other files so that you don't need to duplicate the code

In mongodb or nosql libraries, a schema is equal to a table in normal sql database

form inputs will be shared between both new file and edit file. So we need to create a new partial named _form_fields.ejs inside views/authors. The reason we use "_" because it is a partial file but not a file thats been rendered from the server.

express does not have an easy way to access variables such as author. so we install a library called body-parser

We will use async await for all of our functions to make them cleaner

everything in mongoose and mongodb is done asynchronously, so we need to use await in order to wait for that asynchronous call to be completed

<% in errorMessage.ejs will make sure it will not output to HTML, but only run on server

Author model from mongoose has a ton of different functionality. You can find certain authors, create, update authors