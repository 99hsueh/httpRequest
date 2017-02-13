var https = require('https');

function getHTML (options, callback) {
  https.get(options,(getHTML) => {
    getHTML.setEncoding('utf8');

    let contentBody = '';

    getHTML.on('data', function(chunk) {
      contentBody += chunk;
    });

    getHTML.on('end', () => {
      callback(contentBody)
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);