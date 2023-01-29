# Project Summary
This project is the fourth project of the Udacity Front End Web Developer course. It is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on websites. 

## Project Setup
### Technologies
This project uses the following technologies
- Webserver: Node
- Build tool: Webpack
- External script: Service Worker
- External API: MeaningCloud

### 
In order to run the project the following steps have to be taken
- clone the repository
- run `npm i` to install the necessary dependencies
- create a MeaningCloud account and add the api key to a `.env` file 
- run `npm run build-prod` and `npm run start` to start the development build
- run `node src/server/index.js` to start the node server
- in the browser navigate to `http://localhost:8081`

## Test Setup
In order to run the tests the following terminal command has to be run\
`npm run test`
