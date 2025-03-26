import { user } from "./user.js"
import { screen } from "./screen.js"
function appearRepository(){  
       let repositoriesItens = ''
  user.repositories.forEach(repositorie => {  repositoriesItens += `
  <li>
      <a href="${repositorie.html_url}" target="_blank">${repositorie.name}
      <div class="container-extra-infos">
          <p>&#128064 <span>${ repositorie.watchers}</span></p><p>&#x1F374<span>${repositorie.forks}</span></p> <p>&#x1F31F ${repositorie.stargazers_count}</p> <p>&#128187 ${  
            repositorie.language ? repositorie.language : "N/A"}</p>
     </div>
      </a>
  </li>`
})
  if(user.repositories.length > 0 ){
    screen.userProfile.innerHTML +=
    `<div class="repositories section">
           <h2>Repostitorios</h2> 
           <ul>${repositoriesItens}</ul>
       </div>
    ` 
   }
}
export { appearRepository }