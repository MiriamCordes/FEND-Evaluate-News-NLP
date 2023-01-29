import { checkUrl } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

alert("I EXIST")
console.log("CHANGE!!");

// solution taken from: https://knowledge.udacity.com/questions/793705
document.getElementById("form")
    .addEventListener("submit", handleSubmit)

export{handleSubmit}
