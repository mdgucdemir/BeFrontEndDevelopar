

class Request{ // get
    
    get(url){
        return new Promise((resolve,reject) =>{
            
            fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(err => reject(err));
        })
        
        
    }

    post(url,data){

        // Response almak istiyorson Promise ile dondurebilirsin
        return new Promise((resolve,reject)=>{

            fetch(url,{
                // fetch ile post yaparken diger, bir object olusturmamiz gerekiyor
                // ajax de yaptigimiz gibi [json.stringify],[headers] mevcut
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(err => reject(err));
        })           
                
    }
    
}


const request = new Request();

// --------------------------- GET---------------------------------------------- \\
// let fata;
// request.get("http://jsonplaceholder.typicode.com/albums")
// .then(fata => console.log(fata))
// .catch(err => console.log(err));

// --------------------------------------------------------------------------------- \\


// ----------------------------------- POST ---------------------------------------- \\

request.post("https://jsonplaceholder.typicode.com/albums/",{userId:1,title:"Thriller"})
.then(GelenjsonDegeri => console.log(GelenjsonDegeri))
.catch(GelenHata => console.log(GelenHata));

// --------------------------------------------------------------------------------- \\