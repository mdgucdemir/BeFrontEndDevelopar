// FETCH PUT & DELETE

// ---------------------------------- PUT -------------------------------------------- //

class Request {

    put(url,data) {

        return new Promise((resolve,reject)=>{

            fetch(url,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                    // [ charset=UTF-8 ] yazmaz isen program tam calismiyor
                }
            })
                .then(response => response.json())
                .then(json => resolve(json))
                .catch(err => reject(err));
    
        })
        
    }

    delete(url){
        return new Promise((resolve,reject)=>{
            // burada bos bir veri oldugu icin json a cevirmeyecegiz

            fetch(url,{
                method:'DELETE'
            }).then(response => resolve("Delete Process has Successed"))
            .catch(err => reject(err));
        })
    }

}

const request = new Request();

// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"Eminem Encore"})
// .then(json => console.log(json))
// .catch(err => console.error(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(err => console.error(err));
