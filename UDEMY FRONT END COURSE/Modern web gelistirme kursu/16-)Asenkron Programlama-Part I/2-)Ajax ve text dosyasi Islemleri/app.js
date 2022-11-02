
//------- Http Status code
// 200 = Ok
// 403 = Forbidden(yasakli)
// 404 = Not Found
// 505 = Internal(ic,dahili) Server Error

// ------------------------------------ 

document.getElementById("btn").addEventListener("click",function(){

    // Ajax islemimizi gerceklestirmeye calisalim
    // XMLHttpRequest obejsinden bir tane olusturursak eger, Ajax islemimizi gerceklestiririz 

    const xhr = new XMLHttpRequest();

    // Obejemizi console a yazdiralim bakalim icerisinde neler var
    console.log(xhr);
});