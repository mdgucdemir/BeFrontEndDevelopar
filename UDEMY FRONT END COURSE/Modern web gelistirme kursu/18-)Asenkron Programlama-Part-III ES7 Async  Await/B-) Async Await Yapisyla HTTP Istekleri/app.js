// daha once yaptigimiz Requestleri (GET,POST,PUT,DELETE) async & await kullanarak yapacagiz

// fetch function i kullancagiz, fetch function promise dondurecegi icin async & await kullanacagiz

class Request{

    // GET Request
    async get(url){

        const response = await fetch(url); // resolve ederse Response object dondurucek
        const json = await response.json(); // resolve ederse response object, json object e esit olacak ve json object dondurucek 
        return json;

    }

    // POST Request
    async post(url,data){
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }); // Response Object dondurecek
        const json = await response.json();
        return json;
    }

    // PUT Request
    async put(url,data){
        const response = await fetch(url,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const json = await response.json();
        return json;
    }

    // DELETE Request
    async delete(url){
        const response = await fetch(url,{
            method: 'DELETE'
        });
        // const json = await response.json();
        // return json;

        // delete isleminde bize bos bir json object donecegi icin asagidaki gibi de yapabiliriz
        return "Delete Process was succeeded.";


    }
}

const request = new Request();

// // ---- get ----
// request.get("http://jsonplaceholder.typicode.com/albums")
// .then(albums => console.log(albums))
// .catch(err => console.error(err));
// // ---- get ----

// // ---- post ----
// request.post("http://jsonplaceholder.typicode.com/albums",{userId:2,title:"fosik"})
// .then(NewAlbums => console.log(NewAlbums))
// .catch(err => console.log(err));
// // ---- post ----

// // ---- put ----
// request.put("http://jsonplaceholder.typicode.com/albums/10",{userId:2,title:"fosik"})
// .then(newPut => console.log(newPut))
// .catch(err => console.error(err));
// // ---- put ----

// ---- delete ----
request.delete("http://jsonplaceholder.typicode.com/albums/10")
.then(message => console.log(message))
.catch(err => console.error(err));
// ---- delete ----