function getTopicCount(topic) {
	const https = require('https');
    url = 'https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=topic'

// fetch(url).then(function(response) {
//   return response.json();
//   console.log(response.json());
// }).then(function(data) {
//   console.log(data);
// }).catch(function() {
//   console.log("empty");
// });
let xhr = new XMLHttpRequest();
xhr.responseType = "json"; // xhr.response will be parsed into a JSON object
xhr.open('GET', url, true);
xhr.send();
 
xhr.onreadystatechange = processRequest;
let obj = {};
function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let obj = JSON.parse(xhr.response); 
    }
}

let results = [];
let searchVal = "topic";
for (var i=0 ; i < obj.length ; i++){

    results.length;
}
}