const dotenv = require('dotenv');
dotenv.config();

const express = require('express')

const mockAPIResponse = require('./mockAPI.js')

const fetch = require('node-fetch')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
//app.use(express.static('src/client'))
app.use(express.static('dist'));

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/sentimentAnalysis', async function(req, res) {
    const serverRes = await fetch('https://api.meaningcloud.com/sentiment-2.1' + '?key=' + process.env.API_KEY + '&url=' +  req.body.data  + '&lang=auto');
    try {
        const data = await serverRes.json();
        console.log("data: " + data);
        res.send(data);
    } catch (error) {
        console.log("Error fetching sentiment analysis: ", error);
    }
})