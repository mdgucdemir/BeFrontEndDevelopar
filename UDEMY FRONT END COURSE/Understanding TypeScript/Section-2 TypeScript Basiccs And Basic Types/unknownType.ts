
// // -- The "unknown" Type

// // unknown type da gelen type in bilemedigimiz durumlarda atariz (string mi yokson number mi bilmiyoruz).
// // any ile karistirilmamalidir. any flexible(esnek) bir type dir. herseyi alir ama unknown farklidir.
 


let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// userName = userInput; // unknown type da boyle primitive atama yapilmaz. ama any ile yapabilirsin. Bu da any ve unknown arasindaki farki gosteriyor

// // ama su if condition ile yapilabilir

if (typeof userInput === 'string') {
    userName = userInput;
    // primitive olarak yamadigimiz atamayi burada condition ile yapabiliriz
}