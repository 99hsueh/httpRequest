var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    var chunk = '';
    response.on('data',function (data) {
      chunk += data;
      console.log(chunk);
    });
  });
};

getAndPrintHTMLChunks();