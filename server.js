var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one': {
        title: 'Article One | Akash Bagchi',
        heading: 'Article One',
        date: 'September 5 2016',
        content:`
        <p>
            This is the content for my new article This is the content for my new article This is the content for my new article This is the content for my new article This is the content for my new article This is the content for my new article This is the content for my new article This is the content for my new article This is the content for my new article
        </p>
        <p>
            This is the content for my new article This is the content for my new article This is the content for my new article This is the content for my new article This is the content for my new article This is the content for my new article This is the content for my new article This is the content for my new article This is the content for my new article
        </p>
        <p>
            This is the content for my new article This is the content for my new article This is the content for my new article This is the content for my new article This is the content for my new article This is the content for my new article This is the content for my new article This is the content for my new article This is the content for my new article
        </p>`
    },
    'article-two': {
        title: 'Article Two | Akash Bagchi',
        heading: 'Article Two',
        date: 'September 10 2016',
        content:`
        <p>
            This is the content for my new article. 
        </p>`
        
    },
    'article-three': {
        title: 'Article Three | Akash Bagchi',
        heading: 'Article Three',
        date: 'September 15 2016',
        content:`
        <p>
            This is the content for my new article. 
        </p>`
    },
};
    

function createTemplate (data) {
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;

var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width-device-width, initial-scale-1" /> 
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="Container">
            <div>
                <d href="/">Home</d>
            </div>
            <hr>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;

}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req,res) {
    // articleName == article-one
    // articles[articleName] == {} content object for article one
    var articleName = req.parans.articleName;
res.send(createTemplate(articles[articleName]));
});

}
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
