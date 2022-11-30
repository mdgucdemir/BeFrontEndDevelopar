// ------------------------- DELETE REQUEST -------------------------------

/*

DELETE REQUEST get request e oldukca benziyor, 
biz delete request te herhagi bir veri gondermiyoruz
PUT VE POST REQUEST lerde biz veri gonderiyor idik
ama DELETE REQUEST te veri gondermiyoruz

Sadece bu sefer REQUEST imizin DELETE oldugunu belirtip ornegin [ /albums/10 ] dersek eger (id si 10 ) olan verimizi silmis oluyoruz.
VE (Response) olarak bize bos bir object donuyor


*/

class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    get(url,callback){

        this.xhr.open("GET",url,true);
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("GET REQUEST: There is a problem",null);
            }
        }

        this.xhr.post();
    }

    post(url,data,callback){
        this.xhr.open("POST",url,true);
        this.xhr.setRequestHeader("content-type","application/json");
        this.xhr.onload = () =>{
            if(this.xhr.status === 201){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("POST REQUEST: There is a problem",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    
    put(url,data,callback){
        this.xhr.open("PUT",url,true);
        this.xhr.setRequestHeader("content-type","application/json");
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("PUT REQUEST: There is a problem",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }

    
    delete(url,callback){
        // bos bir object dondurecek

        this.xhr.open("DELETE",url,true);
        this.xhr.onload = () =>{
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
                callback(null,"DELETE PROCESS IS DONE");
            }
            else{
                callback("DELETE REQUEST: There is a problem",null);
            }
        }
        this.xhr.send();
    }
}

const request = new Request();

request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
    if(err === null){
        console.log(response);
    }
    else{
        console.log(err);
    }
})