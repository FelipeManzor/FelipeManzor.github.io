const botLanges = document.getElementById("lenges"); //BottonLenguaje es
const botLangen = document.getElementById("lengen"); //BottonLenguaje en

const lenguajeDeseado = "en"


const pageLengOp = document.URL.substring(document.URL.indexOf('?lang='), document.URL.length); //OptionPageLenguage
//console.log(pageLengOp)
(pageLengOp.length==8?botLang.innerHTML=pageLengOp.substring(pageLengOp.length - 2):0);

console.log(botLangen.hidden)
botLanges.hidden=true;
const spanishElements = document.querySelectorAll(':lang(es):not(html)');
const englishElements = document.querySelectorAll(':lang(en):not(html)');

function changeLang() { 
    console.log(document.getElementsByTagName("html")[0].lang)
    if(leng=="es") {
    console.log(leng)
    // Cambiamos los textos a ingles 
    botLangen.style.display = "none";
    botLanges.style.display = "inline";
    //botLanges.hidden=false;
    //botLangen.hidden=true;
    console.log("se ejecutaen");
    console.log(botLangen.hidden);
    leng="en";;
    console.log("se ejecuta EN")
    document.getElementsByTagName("html")[0].lang="en"
    

    // eliminamos todos los elemenos con idioma definido
    spanishElements.forEach(element => {
    element.style.display = 'none';
    });

    englishElements.forEach(element => {
        element.style = "";
        });

} 
    else 
    {
    console.log(leng)    
    console.log("se ejecuta ES");
    console.log("se ejecutaes");
    console.log(botLangen.hidden);
    botLangen.style.display = "block";
    botLanges.style.display = "none";
    //botLanges.hidden=true;
    //botLangen.hidden=false;
    leng="es";
    
    document.getElementsByTagName("html")[0].lang="es"

    spanishElements.forEach(element => {
        console.log(element)
        element.style = '';
        });
    
    englishElements.forEach(element => {
        element.style.display = 'none';
        });
};
}

let leng = "en" //Lenguaje deseado
changeLang()

leng = document.getElementsByTagName("html")[0].lang; //BotonTomaValordeLaPagina

console.log("-----------------------------")
if (leng != lenguajeDeseado) { console.log(leng);changeLang();changeLang() } { changeLang() }


// delay en la pagina para que carge ordenado 
setTimeout(function() {
    (document.querySelectorAll('html')[0]).style.display="";
  }, 50);
  
console.log("check");
transformText();

function transformText() {
    var text = document.getElementById('nombregithub').innerHTML;
    var newText = "GitHub";
    var originalText = "Felipe Alejandro Manzor Manzor ";
    console.log(text);
    console.log(text == originalText);
    
    setInterval(() => {
      text = document.getElementById('nombregithub').innerHTML;
      
      if (text == originalText) {
        console.log(text);
        console.log(originalText);
        console.log("1");
        document.getElementById('nombregithub').style.opacity = "0";
        setTimeout(() => {
          document.getElementById('nombregithub').innerHTML = "GitHub";
          document.getElementById('nombregithub').style.opacity = "1";
        }, 500);
        console.log("1");
      } else {
        console.log("0")
        document.getElementById('nombregithub').style.opacity = "0";
        setTimeout(() => {
          document.getElementById('nombregithub').innerHTML = "Felipe Alejandro Manzor Manzor ";
          document.getElementById('nombregithub').style.opacity = "1";
        }, 500);
        console.log("0")
      };
      
    }, 4000);
  }