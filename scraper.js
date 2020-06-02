const rp = require("request-promise");
const url =
  "https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States";
const $ = require("cheerio");

rp(url)
  .then(function(html) {
    //successful scenario
    const wikiUrls = [];
    let docLength = $("b > a", html).length;
    for (let i = 0; i < docLength; i++) {
      wikiUrls.push($("b > a", html)[i].attribs.title);
    }
    console.log("====================================");
    console.log(wikiUrls);
    console.log("====================================");
  })
  .catch(function(err) {
    //handle error
  });
