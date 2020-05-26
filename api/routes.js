//import of required dependencies: express, express-jwt and jwks-rsa
const express = require("express");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const path = require("path");

//import of files that are used in our app
const allShows = require("./data/tvShows");
const allMovies = require("./data/movies");
const config = require("./config");

const router = express.Router(); 

//authentication route
const authCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: [config.AUDIENCE],
    issuer: `https://${config.AUTH0_DOMAIN}/`,
    algorithm: "RS256"
  });

  router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"));
    // this file will be created once the app is built, currently not existing
  });
  
  router.get("/api/", (req, res) => {
    res.send("API is working");
  });
  

  module.exports = router;