// LAST SEARCH

class Storage{

    static getSearhedUsersFromStorage(){
        // tum bilgileri al
        
        let users;

        if(localStorage.getItem("searched") === null){
            users = [];
        }
        else{
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }

    static addSearhedUserToStorage(username){
        // Sorgulanmis kullanici ekle

        let users = this.getSearhedUsersFromStorage();

        // username var mi diye array lerde kullanilan (IndexOf) function kullanicaz

        if(users.indexOf(username) === -1){
            // -1 geliyor ise username yok demektir, username ekleyebilirim demektir 
            users.push(username);
            // else durumunu kontrol etmemize gerek yok
        }

        // username eklendi,degerimizi guncellememiz gerekiyor
        localStorage.setItem("searched",JSON.stringify(users)); 
    }

    static clearAllSearchedUsersFromStorage(){
        // tum kullanicilari silme
        localStorage.removeItem("searched");
    }
}