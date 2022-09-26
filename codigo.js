//ELEMENTOS DEL CRONOGRAMA

const izquierdo = document.querySelector(".izquierdo");
const derecho = document.querySelector(".derecho");



//CLASE FARMACIA
class farmacia {
    constructor(nombre, direccion){
        this.nombre = nombre;
        this.direccion = direccion;
    }
}
const EXPEDITO = new farmacia("SAN EXPEDITO","B° SAN NICOLAS FRENTE SKATE PARK");
const LOURDESII = new farmacia("LOURDES II","B° ESTACION ESQUINA SANTA ROSA Y 20 DE MAYO");
const LOURDESI = new farmacia("LOURDES I","B° CENTRO ESQUINA 9 DE JULIO Y SAN MARTIN");
const NICOLAS = new farmacia("SAN NICOLAS","B° CENTRO ESQUINA 25 DE MAYO Y SAN MARTIN");
const ELENA = new farmacia("SANTA ELENA","B° CENTRO ESQUINA 25 DE MAYO Y JOAQUIN V GONZALES");
const CENTRO = new farmacia("DEL CENTRO","B° CENTRO CALLE 9 DE JULIO");
const CORAZON = new farmacia("SAGRADO CORAZON","B° INMACULADA CALLE 9 DE JULIO");


//MESES
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

const d = new Date();
let año = d.getFullYear();
let mestex = meses[d.getMonth()];
let mes = d.getMonth();
let salidaMes;
let contadorDias
console.log(d)
console.log(año)
console.log(mestex)
console.log(mes)

let entradaMes = document.getElementById("entradaMes");
let mesh3 = document.querySelector(".mesh3");
//function seleccionado(){ arrayMes=entradaMes.value;}
const cantidadDias = (mes) => {
    //let a= new Date(año, mes, 0).getDate();
    let number = mes/2;
    salidaMes = parseInt(number);
return salidaMes;
}


let paraFor;
let diaContador = document.getElementById("diaContador");
let contDia=1;

function aparecerCronograma(){
    let cuadroEntradas = document.querySelector(".cuadroEntradas");
    cuadroEntradas.classList.toggle('cuadroEntradasActivo');
    let cambioEstilo = document.querySelector(".cronogramaCompleto");
    cambioEstilo.classList.toggle('cronogramaCompletoOK')
    let cuadroDia = document.querySelector('.cuadroDia');
    cuadroDia.classList.toggle('cuadroDiaActivo')
    let cuadroContadorDia = document.querySelector('.cuadroContadorDia');
    cuadroContadorDia.classList.toggle('cuadroContadorDiaActivo')
    return;
}

const mesComparar = (año,mes)=>{
    return new Date(año, mes, 0).getDate();
}

let jsAphp = function (datito){
    $(document).ready(function(){
        let vari = datito;
$('#pruebajsphp').load("datos.php",{varijs:vari})
    })
}

//CLICK MES
const clickMes = document.getElementById("clickMes");
clickMes.addEventListener("click",()=>{

    jsAphp(entradaMes.value);
    aparecerCronograma()
    diaContador.innerHTML = contDia;
    var arrayMes;
    let contador=0;
    for(let i=0; i<13; i++){
        contador++;
        if(entradaMes.value == meses[i]){
            arrayMes = contador;
            break;
        }
    }
    contadorDias = mesComparar( año, arrayMes);
    console.log("contador dias: "+contadorDias);
    mesh3.innerHTML=entradaMes.value;
    paraFor = cantidadDias(contadorDias);
    console.log("mitad de dias: "+paraFor);
   // jsAphp(entradaMes.value);
})



//FUNCION AGREGAR FARRMACIAS
function agregarFarmacias(){
    let salidaFar="";
    let salidaDirec="";
    
    //jsAphp(contDia);linea 69

    if(contDia <= contadorDias){
       // enviophp(contDia);
    let arrayDeFarmacias=[];
    let nombre = entradaFarmacia.value.toUpperCase()
    if(nombre == "EXPEDITO" || nombre == "FIGUEROA" || nombre == "CORAZON" || nombre == "CENTRO" || nombre == "LOURDES I" || nombre == "LOURDES II" || nombre == "NICOLAS" || nombre == "ELENA"){
        
        $.ajax({
            url: "datos.php",
            type: "post",
            data: $("#formulario").serialize(),
            success: function(resultado){
                console.log(resultado);
            }
        })

        arrayDeFarmacias[contDia]=nombre;
        //CREAR ELEMENTOS
        if(contDia <= paraFor){
            const cuadrito = document.createElement("DIV");
            cuadrito.classList.add("cuadrito");
    //CUADRO DIAS
            const dia = document.createElement("p");
            dia.classList.add("par", "impar","fecha");
    //TEXTO CON NOMBRE Y DIRECCION
            const texto = document.createElement("DIV");
            const far = document.createElement("p");
            const dir = document.createElement("p");
    //AGREGANDO CLASSESLIST
            texto.classList.add("texto");
            far.classList.add("far");
            dir.classList.add("dir");
    //AGREGANDO DATOS
            dia.textContent = contDia;
            switch(nombre){
                case 'CORAZON':
                salidaFar = CORAZON.nombre;
                salidaDirec = CORAZON.direccion;
                break;
            case 'EXPEDITO':
                salidaFar = EXPEDITO.nombre;
                salidaDirec = EXPEDITO.direccion;
                break;
            case 'LOURDES II':
                salidaFar = LOURDESII.nombre;
                salidaDirec = LOURDESII.direccion;
                break;
            case 'LOURDES I':
                salidaFar = LOURDESI.nombre;
                salidaDirec = LOURDESI.direccion;
                break;
            case 'NICOLAS':
                salidaFar = NICOLAS.nombre;
                salidaDirec = NICOLAS.direccion;
                break;
            case 'CENTRO':
                salidaFar = CENTRO.nombre;
                salidaDirec = CENTRO.direccion;
                break;
            case 'ELENA':
                salidaFar = ELENA.nombre;
                salidaDirec = ELENA.direccion;
                break;
                default: alert('nombe no encontrado');
            }
            far.textContent=salidaFar;
            dir.textContent=salidaDirec;

    //ARMANDO CUADRITO
            texto.appendChild(far);
            texto.appendChild(dir);
            cuadrito.appendChild(dia)
            cuadrito.appendChild(texto);
            izquierdo.appendChild(cuadrito);
        }else{
            const cuadrito = document.createElement("DIV");
            cuadrito.classList.add("cuadrito");
    //CUADRO DIAS
            const dia = document.createElement("p");
            dia.classList.add("par", "impar","fecha");
    //TEXTO CON NOMBRE Y DIRECCION
            const texto = document.createElement("DIV");
            const far = document.createElement("p");
            const dir = document.createElement("p");
    //AGREGANDO CLASSESLIST
            texto.classList.add("texto");
            far.classList.add("far");
            dir.classList.add("dir");
    //AGREGANDO DATOS
            dia.textContent = contDia;
            switch(nombre){
                case 'CORAZON':
                salidaFar = CORAZON.nombre;
                salidaDirec = CORAZON.direccion;
                break;
            case 'EXPEDITO':
                salidaFar = EXPEDITO.nombre;
                salidaDirec = EXPEDITO.direccion;
                break;
            case 'LOURDES II':
                salidaFar = LOURDESII.nombre;
                salidaDirec = LOURDESII.direccion;
                break;
            case 'LOURDES I':
                salidaFar = LOURDESI.nombre;
                salidaDirec = LOURDESI.direccion;
                break;
            case 'NICOLAS':
                salidaFar = NICOLAS.nombre;
                salidaDirec = NICOLAS.direccion;
                break;
            case 'CENTRO':
                salidaFar = CENTRO.nombre;
                salidaDirec = CENTRO.direccion;
                break;
            case 'ELENA':
                salidaFar = ELENA.nombre;
                salidaDirec = ELENA.direccion;
                break;
                default: alert('nombe no encontrado');
            }
            far.textContent=salidaFar;
            dir.textContent=salidaDirec;
    //ARMANDO CUADRITO
            texto.appendChild(far);
            texto.appendChild(dir);
            cuadrito.appendChild(dia)
            cuadrito.appendChild(texto);
            derecho.appendChild(cuadrito);
        }
        contDia++;
        diaContador.innerHTML = contDia;
        entradaFarmacia.value=null;
        
    }else{
        alert("NOMBRE NO ENCONTRADO")
    }
    
    }else{
        
    }
    if(contDia == contadorDias){
        
        document.querySelector(".cuadroDia").disabled=false;
        cuadroDia.classList.toggle('cuadroDia');
        
    }
}

var entradaFarmacia = document.getElementById("entradaFarmacia");
document.getElementById("enviarFarmacia").addEventListener("click", (e)=>{
    agregarFarmacias();
})



entradaFarmacia.addEventListener('keypress', (e)=>{
    if(e.keyCode === 13){
        agregarFarmacias();
    }
})









