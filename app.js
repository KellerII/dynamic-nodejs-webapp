//Problem: We need a simple way to look at a user's badge count and javascript points from a web browser.

//Solution: Use NodeJS to perform our profile lookups and serve them via HTTP.

//1. Create a web server
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {
}).listen(3000, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
} );

//2. Handle HTTP route GET / and POST / i.e. home
function homeRoute(request, response) {
    //if url == "/" && GET
    //show search
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    setInterval(function() {
        response.write(new Date() + "\n");
    }, 1000);
    //if url == "/" && POST
    //redirect /:username
}

//3. Handle HTTP route GET /:username i.e. /chalkers
  //if url == "/..."
    //get JSON from Treehouse
      //on end
        //show profile
      //on error
        //show the error

//4. Function that handles the reading of files and merge in values
  //read from file and get a string
    //merge values into string