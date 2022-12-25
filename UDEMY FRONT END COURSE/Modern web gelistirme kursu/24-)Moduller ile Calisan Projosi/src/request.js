/*
  [
    dort adet islemimiz var

    1-)get
    2-)post
    3-)put
    4-)delelte
  ]
*/
export class Request{

    constructor(url){

        this.url = url;
    }

    async get(){
        // kendi rest api miza baglanarak verilerimizi almaya calisacaz. bu veriler bize response object seklinde geliyordu
        const response = await fetch(this.url); // yapisi ile biz response larimiz aliyorduk
        const responseData = await response.json(); // json object imizi aliyoruz. burida bize bir tane promise dondurecek

        return responseData; // json degerimizi donduruyoruz
    }

    async post(data){

        const response = await fetch(this.url,{

            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        const responseData = await response.json();
        return responseData;
    
    }

    async put(id,data){
        // post request e cok benzer. gorevi ise secilen veriyi update eder
        const response = await fetch(this.url + "/" + id,{

            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        const responseData = await response.json();
        return responseData;
    }

    async delete(id){
        const response = await fetch(this.url + "/" + id,{

            method: 'DELETE'            
        });

        // buradan bize verimiz silindigi icin bos bir object gelicek 
        // bunun icin return ile herhangi bir message dondure bilirsiniz
        return "Silinmesini istegin veri silindi lo";
    }
}