var express = require("express");
var router = express.Router();

router.get("/movies", async (req, res, next) => {
  const url = process.env.URL_STRING;
  const token = process.env.API_TOKEN;
  const key = process.env.API_KEY;
  try {
    const appel = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });
    const allMovies = await appel.json();
    // console.log(allMovies);
    res.status(200).json({
        movies: allMovies.results
    })
  } catch {
    res.status(400).json({ message: "error in the request" });
  }
});

module.exports = router;
