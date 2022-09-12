
// [Mouse Event] leri

const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// [Click Event] i

// title.addEventListener("click",fun);



// [Double Click Event] i (dblclick)


// title.addEventListener("dblclick",fun);


// [Mouse Down] Eventi


// click eventine cok benziyor. Bastigimiz ve Basili tuttugumuz zaman oluyor

// title.addEventListener("mousedown",fun);



// [Mouse Up] eventi 


// KeyUp eventine benziyor. Click ten elimizi cektigimiz zaman olusuyor

// title.addEventListener("mouseup",fun);


// [Mouse Over] eventi

// Mouse ile elementin uzerine geldigimiz zaman calisiyor

// title.addEventListener("mouseover",fun);




// [Mouse Out] eventi

// Mouse ile elementin uzerinden ciktigimiz zaman olusan eventtir

// title.addEventListener("mouseout",fun);



// [mouseover & mouseout] bir card body ye tanimlanir ve card body icerisindeki elemanlar uzerinde gezinti yapilir ise; durmandan olusacaklar

// cardBody.addEventListener("mouseover",fun);
// cardBody.addEventListener("mouseout",fun);



// [Mouse Enter & Mouse Leave]

// MouseOver ve MouseOut a benzerdirler
// Aralarinda ki fark [Mouse Enter] card body ye girdiginde(card body sadece bir ornek) calisacak
// [Mouse Leave] ise tanimlan bolgeden ciktiktan sonra calisacak

cardBody.addEventListener("mouseenter",fun);
cardBody.addEventListener("mouseleave",fun);

function fun(e){
    console.log(e.type);
}