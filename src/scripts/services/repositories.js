import { baseUrl , repositoriesQuantity} from "../variables.js"
import { setToken } from "../env-options.js";

async function getRepositories(userName){
    setToken()
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`) 
    return await response.json()
}  
export{ getRepositories }