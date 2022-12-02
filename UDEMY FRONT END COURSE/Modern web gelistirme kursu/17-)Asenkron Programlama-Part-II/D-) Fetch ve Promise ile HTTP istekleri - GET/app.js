
// -----------------------------------------------------------------//


// class Request {
//     // burada constructor olmayacak cunku window object uzerinden fetch function kullanacagiz

//     get(url){        // get request

//         fetch(url)
//         .then(responso => responso.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err));
//     }
// }

// const request = new Request();
// request.get("http://jsonplaceholder.typicode.com/albums");

// -----------------------------------------------------------------//


// -----------------------------------------------------------------//

class Request {

    get(url){

        return new Promise(function(resolve,reject)  {

          fetch(url)
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(err => reject(err));
           
        })
    }
}

const request = new Request();

let albums;

request.get("http://jsonplaceholder.typicode.com/albums")
.then(data => {
    console.log(data)
})
.catch(err => console.log(err));








// -----------------------------------------------------------------//