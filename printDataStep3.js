var https = require('https');

function getAndPrintHTML (options) {



  /* Add your code here */

  https.get(options, function (response) {
    response.setEncoding('utf8');
    var chunk = '';
    response.on('data',function (data) {
      chunk += data;
      console.log(chunk);
    });
  });
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);