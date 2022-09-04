// javascript e ES6(ECMAscript 6) ile gelen Template Literal.

// string lerimizi daha kolay ve daha guzel bicimlendirmemizi sagliyor.

const name = "mehmet deniz";
const department = "IT";
const salary = 12500;


// const a = "name: " + name + "\n" + "department: " + department + "\n" + "salery: " + salery;

//[\n bir alt satira gec demek]

// daha kolay yolu icin tamplate literal i secin :)
// bunun icin [backtick] iseareti lazim o da 1 tusunun solunda esc nin hemen altinda `````` :))


const a = `Your name:${name}\nYour Department:${department}\nYour Salary:${salary}`;

function b(){
    return "hello world"
}
console.log(a);

const html = `

<ul>
   <li>${name}</li>
   <li>${department}</li>
   <li>${salary}</li>
   <li>${10/4}</li> 
   <li>${10*4}</li>
   <li>${b()}</li>
</ul>

`

document.body.innerHTML = html; //js den html e yazdirma [document icinde ki body ye innerHTML e sunu bunu cak :))]