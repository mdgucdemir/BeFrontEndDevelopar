

class Request{ // get
    
    get(url){
        return new Promise((resolve,reject) =>{
            
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
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



// --------------------------------------------------------------------------------- \\