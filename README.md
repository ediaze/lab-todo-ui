# todo-ng
angular cli tutorial

# run project
npm run json-server
ng serve
ng test
concurrently "npm run json-server" "ng serve" "ng test"

# Tutorial: Create a web API with ASP.NET Core
https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-5.0&tabs=visual-studio

# Angular and RxJS: Adding a REST API Back End
https://www.sitepoint.com/angular-rxjs-create-api-service-rest-backend/

# Angular 11 HttpClient Service Example: Http GET, POST, PUT & Update Request Tutorial
https://www.remotestack.io/angular-httpclient-service-example-tutorial/

# you can use concurrently to run both commands concurrently without opening multiple terminal windows or tabs.
https://github.com/kimmobrunfeldt/concurrently
npm install -g concurrently

# Let’s start by installing the body-parser npm module, which we’ll need to parse the JSON in our HTTP requests:
npm install --save body-parser

Change:
"json-server": "json-server --watch db.json",

By;
"json-server": "node json-server.js"