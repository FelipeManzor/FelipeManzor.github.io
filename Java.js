const botLang = document.getElementById("leng"); //BottonLenguaje
botLang.innerHTML = document.getElementsByTagName("html")[0].lang; //BotonTomaValordeLaPagina
const pageLengOp = document.URL.substring(document.URL.indexOf('?lang='), document.URL.length); //OptionPageLenguage
//console.log(pageLengOp)
(pageLengOp.length==8?botLang.innerHTML=pageLengOp.substring(pageLengOp.length - 2):0);

botLang.onclick() 

function changeLang() { 
    botLang.innerHTML=="es"?changeLangEn():changeLangEs();
    console.log("se ejecuta")
}

function changeLangEn() { 
    botLang.innerHTML="en";
}
function changeLangEs() {
    botLang.innerHTML="es";
}