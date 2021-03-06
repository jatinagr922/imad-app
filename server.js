var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

var articles={ 
'article-one':{
title:'ARTICLE ONE | JATIN AGRAWAL',
heading:'ARTICLE ONE',
date:'sept 21,2017',
content:`
<p>
THIS IS MY FIRST WEB APP
</p>`
    
},
'article-two':{title:'ARTICLE TWO | JATIN AGRAWAL',
heading:'ARTICLE TWO',
date:'sept 21,2017',
content:`
<p>
THIS IS MY FIRST WEB APP
</p>`},
'article-three':{title:'ARTICLE THRE | JATIN AGRAWAL',
heading:'ARTICLE THREE',
date:'sept 21,2017',
content:`
<p>
THIS IS MY FIRST WEB APP
</p>`}
};
function createTemplate (data){
    var title=data.title;    
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var Template= `
<html>
<head>
    <title>$(title)</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
     <link href="/ui/style.css" rel="stylesheet" />

</head>
<body>
    <div class="container">
    <div>
        <a href="/">home</a>
    </div>
    <hr/>
    <hr3>$(heading)</hr3>
    <div>$(date)</div>
    <div>$(content) </div>
    </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function (req,res){
    var articleName=req .params.articleName;
res.send(createTemplate(articles[articleName]));
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
