// --------- PUT REQUEST --------------

// Put Requst bir veriyi [ update ] etmemizi, guncellememizi saglayan Request type imiz.

class Request{

    constructor(){

        this.xhr = new XMLHttpRequest();
    }

    get(url,callback){

        this.xhr.open("GET",url,ture); // connection done, asynchronous did it
        this.xhr.onload = () => { // write your conditon ( if )
            if(this.xhr.status === 200){ // 200 OK status code
                callback(null,this.xhr.responseText);
            }
            else{
                callback("GET Request: There is a problem",null);
            }


        }

        this.xhr.send(); // GET Request done
    }

    post(url,data,callback){
        this.xhr.open("POST",url,true); // connection done, asynchronous did it

        // WE HAVE A SETREQUESTHEADER
        this.xhr.setRequestHeader("content-type","application/json");

        this.xhr.onload = () =>{
            if(this.xhr.status === 201){ // 201 CREATED status code
                callback(null,this.xhr.responseText);
            }
            else{
                callback("POST Request: There is a problem",null)
            }
        }
        this.xhr.send(JSON.stringify(data));
    }


    // goruldugu uzere [ put request ] [ post request ] ile neredeyse ayni
    // bu sekilde diledigimiz veriyi guncelleyebiliriz (update)
    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("content-type","application/json");
        this.xhr.onload = () =>{
            if(this.xhr.status === 200){// 200 OK status code
                callback(null,this.xhr.responseText);
            }
            else{
                callback("PUT Request: There is a problem",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
}

const request = new Request();
/*
PUT REQUEST  te post request ten farkli olarak url de kacinci id yi degistirmemiz gerektigin gostermeliyiz

PUT RQUEST
https://jsonplaceholder.typicode.com/albums/10

POST REQUEST
https://jsonplaceholder.typicode.com/albums

*/
request.put("https://jsonplaceholder.typicode.com/albums/10",{userid:2,title:"Eminem Encore"},function(err,response){
    if(err === null){
        console.log(response);
    }
    else{
        console.log(err);
    }
});