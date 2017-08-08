var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article One | JATIN AGRAWAL',
    heading: 'Article One',
    date: '08/08/2017',
    content: `
            <h5>
            <p>
            
                THIS IS THE CONTENT FOR MY FIRST WEB PAGE.THIS IS THE CONTENT FOR MY FIRST WEB PAGE.THIS IS THE CONTENT FOR MY FIRST WEB PAGE.THIS IS THE CONTENT FOR MY FIRST WEB PAGE.THIS IS THE CONTENT FOR MY FIRST WEB PAGE.THIS IS THE CONTENT FOR MY FIRST WEB PAGE.
                
            
            </p>
            </h5>
            <h5>
            <p>
                THIS IS THE CONTENT FOR MY FIRST WEB PAGE.THIS IS THE CONTENT FOR MY FIRST WEB PAGE.THIS IS THE CONTENT FOR MY FIRST WEB PAGE.THIS IS THE CONTENT FOR MY FIRST WEB PAGE.THIS IS THE CONTENT FOR MY FIRST WEB PAGE.THIS IS THE CONTENT FOR MY FIRST WEB PAGE.
                
            </p>
            </h5>
            <h5>
            <p>
                THIS IS THE CONTENT FOR MY FIRST WEB PAGE.THIS IS THE CONTENT FOR MY FIRST WEB PAGE.THIS IS THE CONTENT FOR MY FIRST WEB PAGE.THIS IS THE CONTENT FOR MY FIRST WEB PAGE.THIS IS THE CONTENT FOR MY FIRST WEB PAGE.THIS IS THE CONTENT FOR MY FIRST WEB PAGE.
            </p>
            </h5> `
    
};








app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
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
