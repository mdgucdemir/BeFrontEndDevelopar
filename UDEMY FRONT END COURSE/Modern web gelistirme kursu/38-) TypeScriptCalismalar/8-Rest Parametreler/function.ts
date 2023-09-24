

// // Rest Parametreleri

// // Ayni tipte alacaginiz parametre sayisi ya da eleman sayisi belirli degilse [Rest Parametre] lerinden yararlaniyoruz

function davetEt(ilkDavetli:string, ...digerleri:string[]) {
    return ilkDavetli + ' ' + digerleri.join(' ');
    // ilkdavetli yi biliyoruz ama ondan sonra kactane davetli olacagini bilmiyoruz. iste burada [rest parametre] kullandik
}

console.log(davetEt('engin','berin','derin','serin'));

// // cikti ( engin berin derin serin ) olucaktir.