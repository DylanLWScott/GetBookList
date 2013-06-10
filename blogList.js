var page = require('webpage').create();

page.onConsoleMessage = function (msg) {
    console.log(msg);
};

page.open('http://www.oreillynet.com/oreilly/bloggers/available.csp', function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var ua = page.evaluate(function () {
            var books = document.querySelectorAll('h3 a');
            var results;
            for(var i=0;i<books.length;i++){
               console.log(books[i].innerText); 
            }
            return results;
        });
    }
    phantom.exit();
});
