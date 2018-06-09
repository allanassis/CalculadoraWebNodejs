let express      = require('express');
let app          = express();
let bodyParser   = require('body-parser');
let cookieParser = require('cookie-parser');
let path         = require('path');
let index        = require('./routes/index');


let port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'public')),
express.static(path.join(__dirname,'bower_components')),
express.static(path.join(__dirname,'views')))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
//app.use(cookieParser.JSONCookies());
app.use('/calcular',index);

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname,'./views/index.html'));
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

