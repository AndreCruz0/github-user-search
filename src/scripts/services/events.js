import { baseEventUrl } from "../variables.js"
import { eventsQuantity } from "../variables.js"
import { setToken } from "../env-options.js";


async function getEvents(userName) {
    const response = await fetch(`${baseEventUrl}/${userName}/events?per_page=${eventsQuantity}`, 
        setToken()
    );
    return await response.json();
}
export { getEvents } 