import { baseUrl } from "../variables.js"
import { setToken } from "../env-options.js";
async function getUser(userName){
    setToken()
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json() 
}
export {getUser}