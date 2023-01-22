const dotenv = require('dotenv');
dotenv.config({ path: '../../.env'});
const apiKey = process.env.API_KEY;

var path = require('path')
const express = require('express')

const mockAPIResponse = require('./mockAPI.js')

const fetch = require('node-fetch')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()


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
    console.log("in post function in server.js")
    const serverRes = await fetch('https://api.meaningcloud.com/sentiment-2.1' + 'key=' + apiKey + 'url=' +  req.body.formText  + 'lang=auto');
    try {
        const data = await serverRes.json();
        res.send(data);
    } catch (error) {
        console.log("Error fetching sentiment analysis: ", error);
    }
})

export{
    handleSubmit,
    checkForName
    }