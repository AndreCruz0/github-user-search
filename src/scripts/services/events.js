import { baseEventUrl } from "../variables.js"
import { eventsQuantity } from "../variables.js"
async function getEvents(userName){
    const response  = await fetch(`${baseEventUrl}/${userName}/events?per_page=${eventsQuantity}`)
    return await response.json()
}
export { getEvents } 
