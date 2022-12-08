// https://api.github.com/users/
// https://api.github.com/users/mdgucdemir/

// Elementleri secme

const githubForm = document.getElementById("github-form"); // form alani
const nameImput = document.getElementById("githubname"); // input alani
const clearLastUsers = document.getElementById("clear-last-users"); // temizleme butonu
const lastUsers = document.getElementById("last-users"); // <ul> alani 

// Object creat

const github = new Github();
const ui = new UI();

// Event Listeners
eventListeners();

function eventListeners(){

    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched); // son aramalari sayfa yenilendikce storage dan alip arayuzumuze yazacagiz
}

function getData(e){

    let username = nameImput.value.trim();

    if (username === ""){
        alert("Lutfen gecerli bir kullanici adi giriniz.")
    }
    else{

        github.getGithubData(username)
        .then(response => {
            if(response.user.message === "Not Found"){
                ui.showError("Kullanici bulunamadi");
            }
            else{
                // console.log(response);

                // buradaki response iki tane anahtar kelime tutuyor [user, repo]
                ui.showUserInfo(response.user);
            }
        })
        .catch(err => ui.showError(err));
    }

    ui.clearInput(); // input field temizleme function
    e.preventDefault();
}

function clearAllSearched(){
    // tum arananlari temizle
}

function getAllSearched(){
    // arananlari storage dan al ve UI ya ekle
}