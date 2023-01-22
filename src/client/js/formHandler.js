//import { json } from "express"
import { checkForName } from "./nameChecker"

function handleSubmit(event) {
    event.preventDefault()
    console.log("in getSentimentAnalysis");
    // check what text was put into the form field
    let formText = document.getElementById('name').value

    const getSentimentAnalysis = async(data = {}) => {
        
        const res = await fetch('http://localhost:8080/sentimentAnalysis', {
            method: 'POST', 
            credentials: 'same-origin', 
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            redirect: "follow",
    referrerPolicy: "no-referrer",
            body: JSON.stringify({formText})
        });
        try {
            const sentiment = await res.json;
            console.log(sentiment);
            return sentiment;
        } catch (error) {
            console.log("Error fetching sentiment: ", error)
        }
    }
}

export { handleSubmit }
