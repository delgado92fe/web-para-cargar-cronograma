
const dia = new Date().getDate();
const hora = new Date().getHours();
const mes = new Date().getMonth();


    //IMAGEN
const imagen = document.querySelector(".imgnov");

if(mes == 4){
  imagen.style.backgroundImage = "url(MAYO.png)";
}else{
  imagen.style.backgroundImage = "url(junio.png)";
}




let anterior;
let mess;

//FUNCION DE FARMACIAS

function LourdesII(){
  document.querySelector(".farmacia").innerHTML = "LOURDES II";
  document.querySelector(".direccion").innerHTML = "Av. Santa Rosa y 20 de Mayo";
  document.getElementById("imgfarm").style.backgroundImage = "url(farmacias/Lourdes2.png)";
}
function Nicolas(){
  document.querySelector(".farmacia").innerHTML = "SAN NICOLAS";
  document.querySelector(".direccion").innerHTML = "25 de Mayo y San Martin";
  document.getElementById("imgfarm").style.backgroundImage = "url(farmacias/Nicolas.png)";
}
function Corazon(){
  document.querySelector(".farmacia").innerHTML = "SAGRADO CORAZON";
  document.querySelector(".direccion").innerHTML = "B° Inmaculada 9 de Julio";
  document.getElementById('imgfarm').innerHTML = "imagen no dosponible";
}
function Expedito(){
  document.querySelector(".farmacia").innerHTML = "SAN EXPEDITO";
  document.querySelector(".direccion").innerHTML = "B° San Nicolas";
  document.getElementById("imgfarm").style.backgroundImage = "url(farmacias/Expedito.png)";
}
function Centro(){
  document.querySelector(".farmacia").innerHTML = "DEL CENTRO";
  document.querySelector(".direccion").innerHTML = "B° Centro 9 de Julio";
  document.getElementById("imgfarm").style.backgroundImage = "url(farmacias/Centro.png)";
}
function LourdesI(){
  document.querySelector(".farmacia").innerHTML = "LOURDES I";
  document.querySelector(".direccion").innerHTML = "B° centro 9 DE JULIO, plaza principal";
  document.getElementById("imgfarm").style.backgroundImage = "url(farmacias/Lourdes1.png)";
}
function Elena(){
  document.querySelector(".farmacia").innerHTML = "SANTA ELENA";
  document.querySelector(".direccion").innerHTML = "B° Centro 25 de Mayo";
  document.getElementById("imgfarm").style.backgroundImage = "url(farmacias/Elena.png)";
}
function Figueroa(){
  document.querySelector(".farmacia").innerHTML = "FIGUEROA";
  document.querySelector(".direccion").innerHTML = "B° centro 9 de Julio, pasando plaza principal";
  document.getElementById('imgfarm').innerHTML = "imagen no dosponible";
}

/*cambio de mes*/
if (mes == 4) {
  document.querySelector(".mes").innerHTML = "ABRIL";
  
  if (new Date().getHours() >= 8) {
    switch (new Date().getDate()) {
      case 1:
        Elena();
        break;
      case 2:
        LourdesI();
        break;
      case 3:
        Expedito();
        break;
      case 4:
        Nicolas();
        break;
      case 5:
        LourdesII();
        break;
      case 6:
        Centro();
        break;
      case 7:
        Corazon();
        break;
      case 8:
        LourdesI();
        break;
      case 9:
        Elena();
        break;
      case 10:
        Expedito();
        break;
      case 11:
        Nicolas();
        break;
      case 12:
        LourdesII();
        break;
      case 13:
        Centro();
        break;
      case 14:
        LourdesI();
        break;
      case 15:
        Corazon();
        break;
      case 16:
        Expedito();
        break;
      case 17:
        Elena();
        break;
      case 18:
        LourdesII();
        break;
      case 19:
        Nicolas();
        break;
      case 20:
        LourdesI();
        break;
      case 21:
        Centro();
        break;
      case 22:
        Expedito();
        break;
      case 23:
        Elena();
        break;
      case 24:
        LourdesII();
        break;
      case 25:
        Corazon();
        break;
      case 26:
        LourdesI();
        break;
      case 27:
        Centro();
        break;
      case 28:
        Expedito();
        break;
      case 29:
        Nicolas();
        break;
      case 30:
        LourdesII();
        break;
      case 31:
        Elena();
        break;
    }
    
  } else {
    mess = "MAYO";
    anterior = dia - 1;
    switch (anterior) {
      case 1:
        Elena();
        break;
      case 2:
        LourdesI();
        break;
      case 3:
        Expedito();
        break;
      case 4:
        Nicolas();
        break;
      case 5:
        LourdesII();
        break;
      case 6:
        Centro();
        break;
      case 7:
        Corazon();
        break;
      case 8:
        LourdesI();
        break;
      case 9:
        Elena();
        break;
      case 10:
        Expedito();
        break;
      case 11:
        Nicolas();
        break;
      case 12:
        LourdesII();
        break;
      case 13:
        Centro();
        break;
      case 14:
        LourdesI();
        break;
      case 15:
        Corazon();
        break;
      case 16:
        Expedito();
        break;
      case 17:
        Elena();
        break;
      case 18:
        LourdesII();
        break;
      case 19:
        Nicolas();
        break;
      case 20:
        LourdesI();
        break;
      case 21:
        Centro();
        break;
      case 22:
        Expedito();
        break;
      case 23:
        Elena();
        break;
      case 24:
        LourdesII();
        break;
      case 25:
        Corazon();
        break;
      case 26:
        LourdesI();
        break;
      case 27:
        Centro();
        break;
      case 28:
        Expedito();
        break;
      case 29:
        Nicolas();
        break;
      case 30:
        LourdesII();
        break;
      case 31:
        Elena();
        break;
    }
  }
}else{
  if (new Date().getHours() >= 8) {
    switch (new Date().getDate()){
      case 1:
        Corazon();
        break;
      case 2:
        LourdesI();
        break;
      case 3:
        Centro();
        break;
      case 4:
        Expedito();
        break;
      case 5:
        Nicolas();
        break;
      case 6:
        LourdesII();
        break;
      case 7:
        Elena();
        break;
      case 8:
        LourdesI();
        break;
      case 9:
        Centro();
        break;
      case 10:
        Expedito();
        break;
      case 11:
        Nicolas();
        break;
      case 12:
        LourdesII();
        break;
      case 13:
        Elena();
        break;
      case 14:
        Corazon();
        break;
      case 15:
        Centro();
        break;
      case 16:
        Expedito();
        break;
      case 17:
        Nicolas();
        break;
      case 18:
        LourdesII();
        break;
      case 19:
        Elena();
        break;
      case 20:
        Corazon();
        break;
      case 21:
        LourdesI();
        break;
      case 22:
        Expedito();
        break;
      case 23:
        Nicolas();
        break;
      case 24:
        LourdesII();
        break;
      case 25:
        Elena();
        break;
      case 26:
        Corazon();
        break;
      case 27:
        LourdesI();
        break;
      case 28:
        Centro();
        break;
      case 29:
        Nicolas();
        break;
      case 30:
        LourdesII();
        break;
      default:;
    }
  }else{
    mess = "JUNIO";
    anterior = dia - 1;
    switch (anterior){
      case 1:
        Corazon();
        break;
      case 2:
        LourdesI();
        break;
      case 3:
        Centro();
        break;
      case 4:
        Expedito();
        break;
      case 5:
        Nicolas();
        break;
      case 6:
        LourdesII();
        break;
      case 7:
        Elena();
        break;
      case 8:
        LourdesI();
        break;
      case 9:
        Centro();
        break;
      case 10:
        Expedito();
        break;
      case 11:
        Nicolas();
        break;
      case 12:
        LourdesII();
        break;
      case 13:
        Elena();
        break;
      case 14:
        Corazon();
        break;
      case 15:
        Centro();
        break;
      case 16:
        Expedito();
        break;
      case 17:
        Nicolas();
        break;
      case 18:
        LourdesII();
        break;
      case 19:
        Elena();
        break;
      case 20:
        Corazon();
        break;
      case 21:
        LourdesI();
        break;
      case 22:
        Expedito();
        break;
      case 23:
        Nicolas();
        break;
      case 24:
        LourdesII();
        break;
      case 25:
        Elena();
        break;
      case 26:
        Corazon();
        break;
      case 27:
        LourdesI();
        break;
      case 28:
        Centro();
        break;
      case 29:
        Nicolas();
        break;
      case 30:
        LourdesII();
        break;
      default:;
    }
  }
}

