import { checkUrl} from "./urlChecker"

const getSentimentAnalysis = async(data = {}) => {
    const response = await fetch('http://localhost:8080/sentimentAnalysis', {
        method: 'POST', 
        credentials: 'same-origin', 
        mode: 'cors', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
    });
    try {
        const sentiment = await response.json();
        return sentiment;
    } catch (error) {
        console.log("Error fetching sentiment: ", error);
    }
};

function handleSubmit(event) {
    event.preventDefault()
    const formText = document.getElementById('name').value;
    const resultDiv = document.getElementById('results');
    if(!checkUrl(formText)) {
        resultDiv.innerText = 'Please enter a valid URL!';
    } else {
        getSentimentAnalysis({data: formText})
        .then(function(data){
            console.log(data);
            resultDiv.innerText = 'The sentiment of the article is: ' + data.irony;
        })
    }
};

export { handleSubmit }
