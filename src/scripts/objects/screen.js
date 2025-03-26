import { appearRepository } from "./apperRepository.js"
import { apperEvents } from "./apperEvents.js"
const screen = {
    userProfile : document.querySelector(".profile-data"),
    renderUser(user){
      this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt="Foto de Perfil do usuario">
                        <div class="data">
                        <h1>${user.name ??"Não possui nome cadastrado 😢"}</h1>
                        <p>${user.bio ?? "Não possui bio cadastrada 😢"}</p>
                       <p>Seguidores: ${user.followers}</p>
                        <p>Seguindo: ${user.following}</p>
                        </div>
                        </div>
                        `
       appearRepository()
       apperEvents()
      },
  renderNotFound(){
    this.userProfile.innerHTML = "<h3>Não foi encontrado</h3>"
  },
}
export {screen}
