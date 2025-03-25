import { baseUrl , repositoriesQuantity} from "../variables.js"

async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`) //esse per_page meio que ele fala que so quer 10 paginas tlgd que ele pegue do repositorio
    return await response.json()
}  
export{ getRepositories }