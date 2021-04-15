function citar(){
    const $button = document.querySelector("#boton").addEventListener("click",console.log("asies"));
    let request = new XMLHttpRequest();
     request.responseType="json";
     request.open("GET","https://ghibliapi.herokuapp.com/films");
     request.send();
     request.onload= function (){
        const $button = document.querySelector("#boton").addEventListener("click",function (){

        
         let citas = request.response;
         console.log(citas);
 
         const $div= document.querySelector("#citasxd");
         for( let cita of citas)
             $div.innerHTML += `<p class="citas">${cita.title}, ${cita.description}</div>`;
        });
     }
 }
let texto = "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom.";

let js= JSON.stringify(texto);
let jspar= JSON.parse(js);
console.log(jspar);
 citar();