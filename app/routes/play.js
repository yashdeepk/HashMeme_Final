import Route from '@ember/routing/route';
import $ from 'jquery';

function getImage () {
  var hostURL = "https://api.tenor.com/v1/";
  var safeSearch = "&safe_search=strict";
  var ratioSize = "&ar_range=standard";
  var apiKey = "&key=XXWA1B420QGD";
  return new Promise(function(resolve) {
    var trendTerms = $.get(hostURL + "trending_terms?&limit=50" + safeSearch + ratioSize + apiKey);
    trendTerms.done(function(data) {
      var randIndex = Math.floor(Math.random()*51)+1;
      var randTopic = data.results[randIndex]
      var randSearch = $.get(hostURL + "random?q=" + randTopic + "&limit=1" + safeSearch + ratioSize + apiKey);
      randSearch.done(function(data) {
        var imgURL = data.results[0].media[0].gif.url;
        var numTag = data.results[0].itemurl.split("-");

        //Had to split the imgURL to get tags, separated by '-'
        //This was because the tenor api purposely returns the tag list as a null array
        //We emailed tenor and they said that they can't return the tags
        //because it is dependent on how their algorithm runs
        //We didn't want to quit on the idea
        //Therefore, we fixed it with this parsing solution instead
        var tagList = [];
        var firstTag = numTag[0].split("/");
        tagList.push(firstTag[firstTag.length-1]);

        for (var i=1; i < numTag.length-2; i++) {

          tagList.push(numTag[i]);
        }

        var currDate = Date.now() + 60000;
        //remove duplicate tags
        var tags = Array.from(new Set(tagList));
        var returnObj = {
          url:imgURL,
          tagList: tags,
          tagCount: tags.length,
          startTime: currDate
        }
        resolve(returnObj);
      });
    });
  });
}

export default Route.extend({
  model() {
    return getImage().then(function(result) {
      // console.log("Object:", result); // For debugging!
      return [result];
    });
  }
});
