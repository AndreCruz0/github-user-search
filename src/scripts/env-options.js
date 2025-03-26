 const gitHubToken = "COLOQUE SEU TOKEN AQUI :>";  
 const setToken = () => ({
    headers: {
        "Authorization": `token ${gitHubToken}`
    }
});
export { gitHubToken ,setToken}