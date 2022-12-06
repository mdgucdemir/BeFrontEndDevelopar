// API kullanimini gerceklestirecegiz

function Translate(word,language){
    this.apikey = "trnsl.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a8736ef0a54be481";
    this.word = word;
    this.language = language;

    // XHR Object
    this.xhr = new XMLHttpRequest();

}

Translate.prototype = translateWord = function(callback){
    // ajax islemleri

    // translate api get request atma
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`

    this.xhr.open("GET",endpoint,true);

    this.xht.onload = () => {

        if(this.xhr.status === 200){

            // console.log(JSON.parse(this.xhr.responseText).text[0]);
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null,text);
        }
        else{
            callback("bir hata var",null);
        }
    }

    this.xhr.send();
}

Translate.prototype.changeParameters = function(newWord,newLanguage){
    // cevirecegimiz kelimeyi degistirdigimizde yukarida tanimlanan word degismiyor, bunu onlemek adina bu function a ihtiyacimiz var
    this.word = newWord;
    this.language = newLanguage;
}