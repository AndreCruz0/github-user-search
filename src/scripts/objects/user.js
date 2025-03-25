const user = {
        avatarUrl: '',
        name: '',
        bio: '',
        userName: '',
        followers:'',
        following:'',
        repositories: [],
        events: [] ,
        setInfo(githubUser){
            this.avatarUrl = githubUser.avatar_url
            this.name = githubUser.name
            this.bio = githubUser.bio
            this.followers = githubUser.followers
            this.following = githubUser.following
            this.login = githubUser.login
        },
        setRepositories(repositorie){
            this.repositories = repositorie
        },
        setEvents(event){
            this.events = event
        }
}
export {user}
