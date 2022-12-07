class Github{
    constructor(){
        this.url = "https://api.github.com/users/";
    }

    async getGithubData(username){
        const responseUser = await fetch(this.url + username);
        // repos
        const responseRepo = await  fetch(this.url + username + "/repos");

        // Promise ler icin
        const userData = await responseUser.json();
        const repoData = await responseRepo.json();

        // buradaki verilerimiz app.js de kullanicaz, bunlari return ile donmemiz gerekiyor. Bu sefer object seklinde donucez
        return {
            user:userData,
            repo:repoData
        }
    }
}