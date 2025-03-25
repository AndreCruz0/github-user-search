const screen = {
    userProfile : document.querySelector(".profile-data"),
    userProfile2 : document.querySelector(".profile-data2"),
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
                        console.log(user.name);
                        console.log(user.login);
                        

       let repositoriesItens = ''
       user.repositories.forEach(repositorie => repositoriesItens += `<li><a href="${repositorie.html_url}" target="_blank">${repositorie.name}</a></li>`)       
       if(user.repositories.length > 0 ){
        this.userProfile.innerHTML +=
         `<div class="repositories section">
                <h2>Repostitorios</h2> 
                <ul>${repositoriesItens}</ul>
            </div>
         ` 
       }
    },renderEvents(user){
      this.userProfile2.innerHTML +=
      `
           <h2>Eventos</h2>
    ` 
      let eventItens= ''
      user.events.forEach((evento ,index)  => {
        if(evento.type == "PushEvent" || evento.type == "CreateEvent"){
          if(evento.type == "CreateEvent"){
            eventItens = `<li><p>${evento.repo.name} TEM COMMIT NAO OTARIO</p></li>` 
          }else if(evento.type =="PushEvent"){
          eventItens = `<li><p>${evento.repo.name} -${user.events[index].payload.commits[0].message}</p></li>`}
          this.userProfile2.innerHTML +=
          `<div class="events section">
               <ul> ${eventItens}</ul>
           </div>
        ` 
        }   
      });

    },
  renderNotFound(){
    this.userProfile.innerHTML = "<h3>Não foi encontrado</h3>"
  },

    
}
export {screen}
