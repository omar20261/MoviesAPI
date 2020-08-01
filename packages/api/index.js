var express = require('express'),app = express();
const cors = require('cors');
var movies = require('./movies');

app.use(express.json());
app.use(cors());


app.get('/movies', function(req, res) {
    res.json(movies)
});

app.get('/',(req, res)=>{  res.send('<h1> Hello World</h1>');  });

const port = process.env.PORT || '3200';
app.listen(port,() => {  console.log('server started on port '+port); });
