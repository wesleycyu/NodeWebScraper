var http = require('http');
var request = require('request');
var cheerio = require('cheerio');

var url = "http://substack.net/images/"
var parsed_data = []

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    $ = cheerio.load(body)
    var elements = $("tr");
    for (i = 0; i < elements.length; i++) {
      parsed_data.push($(elements[i]).find("code").first().text() + "," + $(elements[i]).find("a").text().split('.'))
    };
    console.log(parsed_data)
  }
});

