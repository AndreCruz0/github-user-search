import { screen } from "./screen.js";
import { user } from "./user.js"
function apperEvents(){let eventItens= ''
user.events.forEach((evento ,index)  => {
  if(evento.type == "PushEvent" || evento.type == "CreateEvent"){
    if(evento.type == "CreateEvent"){
      eventItens += `<li><p>${evento.repo.name} Sem commits</p></li>` 
    }else if(evento.type =="PushEvent"){
    eventItens += `<li><p>${evento.repo.name} -${user.events[index].payload.commits[0].message}</p></li>`}
  } 
});

if(user.events.length > 0){screen.userProfile.innerHTML +=
            `
                <h2>Eventos</h2>
            <div class="events section">
                <ul>${eventItens}</ul>
            </div>
            `   
}else{
        screen.userProfile.innerHTML +=`<h2>Não ha Eventos</h2>`
 }
}
export{apperEvents}