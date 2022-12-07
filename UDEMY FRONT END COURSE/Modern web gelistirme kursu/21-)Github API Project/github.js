class Github{
    constructor(){
        this.url = "https://api.github.com/users/";
    }

    async getGithubData(username){
        const responseUser = await fetch(this.url + username);
        //
    }
}