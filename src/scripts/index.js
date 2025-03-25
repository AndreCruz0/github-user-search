
import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"
import {user} from "./objects/user.js"
import { screen } from "./objects/screen.js"
import { getEvents } from "./services/events.js"

async function getsexo(){
    const response = await fetch(`https://api.github.com/users/andrecruz0/repos`)

    
     await response.json() 
    console.log(response.json);
    
    
}
getsexo()


getEvents()
document.querySelector("#btn-search").addEventListener("click", ()=>{
    const userName = document.querySelector("#input-search").value
    if(validateEmptyInput(userName)) return
    getUserData(userName)

    
})
document.querySelector("#input-search").addEventListener("keyup", (e)=>{
    const userName = e.target.value
    const key = e.which || e.keyCode
    const  isEnterKeyPressed = key === 13
    if(isEnterKeyPressed){
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})
function validateEmptyInput(userName){
    if(userName.length === 0){
        alert("Preencha o campo com o nome do usuario do GitHub")
        return true
    }
}
async function getUserData(userName){

const userResponse  =   await getUser(userName)
console.log(userResponse);
if(userResponse.message === "Not Found"){
    screen.renderNotFound()
    return 
}
    const repositorieResponse = await getRepositories(userName)
    const responseEvents = await getEvents(userName)
    user.setInfo(userResponse)
    user.setRepositories(repositorieResponse)
    user.setEvents(responseEvents)
    screen.renderEvents(user)
    screen.renderUser(user)
}
