var ent = document.getElementById("entrada");
var salida;
let cont = 0;
var grupo=[] ;
var sale = document.getElementById('sale');//SALIDA AL P.PHP
var tomafar; //TOMA EL NOMBRE DEL OBJETO Y PASA A SALIDA
var direccionfarmacia; //TOMA DIRECCION Y PASA PARA ALMASENAR
var direc;
var mesH3 = document.querySelector(".mes");

document.getElementById("cons").innerHTML = "ingrese un dato";

//LLAMAR FUNCION CLIC MEDIANTE ENTER


//alert("solucionar estilo de salida. Este alert esta en la linea 16");

//OBJETOS FARMACIA
const expedito = { nombre: "SAN EXPEDITO",
direccion: "B° San Nicolas frente al skate park"
};

const lourdesi ={ nombre: "LOURDES I",
direccion: "B° centro 9 DE JULIO, plaza principal"};

const lourdesii ={ nombre: "LOURDES II",
direccion: "Av. Santa Rosa y 20 de Mayo"};

const corazon = {nombre: "SAGRADO CORAZON",
direccion: "B° Inmaculada 9 de Julio"};

const centro = {nombre: " DEL CENTRO",
direccion: "B° Centro 9 de Julio"};

const nicolas = {nombre: "SAN NICOLAS",
direccion: "25 de Mayo y San Martin"};

const elena = {nombre: "SANTA ELENA",
direccion: "B° Centro 25 de Mayo"};

const figueroa = {nombre: "FIGUEROA",
direccion: "B° centro 9 de Julio, pasando plaza principal"};

//BASE DE DATOS
const IDBRequest = indexedDB.open("database",1);

IDBRequest.addEventListener("upgradeneeded",()=>{
    const db = IDBRequest.result;
    db.createObjectStore("farmacias",{
        autoIncrement: true
    })
})

IDBRequest.addEventListener("success",()=>{
    console.log("todo salio correctamente");
})

IDBRequest.addEventListener("error",()=>{
    console.log("Ocurrio un error")
})

//function paracargar la BD
function ingresoDeDatos(){
    let nombre = ent.value.toUpperCase()
    if(nombre == "EXPEDITO" || nombre == "FIGUEROA" || nombre == "CORAZON" || nombre == "CENTRO" || nombre == "LOURDES I" || nombre == "LOURDES II" || nombre == "NICOLAS" || nombre == "ELENA"){
        //SELECCIONAR QUE OBJETO ALMACENAR EN TOMAFAR
        if(nombre == "EXPEDITO"){
            tomafar = expedito.nombre;
            direc = expedito.direccion;
        }else if(nombre == "FIGUEROA"){
            tomafar = figueroa.nombre;
            direc = corazon.direccion;
        }else if(nombre == "CORAZON"){
            tomafar = corazon.nombre;
            direc = corazon.direccion;
        }else if(nombre == "CENTRO"){
            tomafar = centro.nombre;
            direc = centro.direccion;
        }else if(nombre == "LOURDES I"){
            tomafar = lourdesi.nombre;
            direc = lourdesi.direccion;
        }else if(nombre == "LOURDES II"){
            tomafar = lourdesii.nombre;
            direc = lourdesii.direccion;
        }else if(nombre == "NICOLAS"){
            tomafar = nicolas.nombre;
            direc = nicolas.direccion;
        }else if(nombre == "ELENA"){
            tomafar = elena.nombre;
            direc = elena.direccion;
        }
        if(document.queryCommandIndeterm(".posible") != undefined){
            if(confirm("Hay elementos sin guardar ¿quieres continuar?")){
                addObjeto({nombre});
                leerObjetos();
            }
        }else{
            addObjeto({nombre});
            leerObjetos();
        }
    }
}

//llamado de function ingresoDeDatos por boton enviar
document.getElementById('add').addEventListener("click",(e)=>{
    ingresoDeDatos();
})
//llamado de function ingresoDeDatos por enter
ent.addEventListener('keypress', (e)=>{
    if(e.keyCode === 13){
        ingresoDeDatos();
    }
})

//MOSTRAR lista
const MostrarLista = document.getElementById("MostrarLista");
MostrarLista.addEventListener('click', ()=>{
    leerObjetos();
});

//FUNCIONES PARA DB
function addObjeto(objeto) {
    const IDBData = getIDBData("readwrite", "objeto agregado correctamente");
    IDBData.add(objeto);
}

const leerObjetos = ()=>{
    const IDBData = getIDBData("readonly");
    const cursor = IDBData.openCursor();
    const fragment = document.createDocumentFragment();
    document.querySelector(".contenedor").innerHTML = "";
    cursor.addEventListener("success",()=>{
        if(cursor.result){
            console.log(cursor.result.value);
            let elemento = nombresHTML(cursor.result.key,cursor.result.value);
            fragment.appendChild(elemento);
            cursor.result.continue()
    } else console.log("leidos todos los registros");
    document.querySelector(".contenedor").appendChild(fragment);
    })
}

const modificarObjeto = (key,objeto) =>{
    const IDBData = getIDBData("readwrite","Objeto modificado  correctamente");
    IDBData.put(objeto,key);
    }
const eliminarObjeto = key =>{
    const IDBData = getIDBData("readwrite","objeto eliminado correctamente");
    IDBData.delete(key);
    }
const getIDBData = (mode,msg) =>{
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("farmacias",mode);
    const objectStore = IDBtransaction.objectStore("farmacias");
    IDBtransaction.addEventListener("complete",()=>{
        console.log(msg)
    })
    return objectStore;
}

//const contenedor =document.querySelector(".contenedor")

const nombresHTML = (id,name) =>{
    const container = document.createElement("DIV");
    const nombreFarm = document.createElement("p");
    const options = document.createElement("DIV");
    const saveButton = document.createElement("button");
    const dia = document.createElement("p");


    dia.classList.add("dia");
    nombreFarm.classList.add("nombreFarm");
    container.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");

    dia.textContent = id;
    saveButton.textContent = "guardar";
    nombreFarm.textContent = name.nombre;
    nombreFarm.setAttribute("contenteditable","true");
    nombreFarm.setAttribute("spellcheck","false");

    options.appendChild(saveButton);

    container.appendChild(dia);
    container.appendChild(nombreFarm);
    container.appendChild(options);

    nombreFarm.addEventListener("keyup",()=>{
        saveButton.classList.replace("imposible","posible")
    })
//MODIFICAR EL NOMBRE DE LA FARMACIA
    saveButton.addEventListener("click",()=>{
        alert("1° parte");
            if(saveButton.classList == "posible"){
                modificarObjeto(id,{nombre:nombreFarm.textContent})
                saveButton.classList.replace("posible","imposible")
            }
        
        alert("3°parte")
    })


    return container;
}

//DESCARGAR BASE PARA IMAGEN
const descargarBase = ()=>{
    const IDBData = getIDBData("readonly");
    const cursor = IDBData.openCursor();
    const fragment = document.createDocumentFragment();
    document.querySelector(".contenedorCronograma").innerHTML = "";
    cursor.addEventListener("success",()=>{
        if(cursor.result){
            console.log(cursor.result.value,cursor.result.key);
            let element = farmaciaHTML(cursor.result.key,cursor.result.value);
            fragment.appendChild(element);
            cursor.result.continue()
    } else console.log("leidos todos los registros");
    document.querySelector(".contenedorCronograma").appendChild(fragment);
    })
}


const guardar = document.getElementById("guardar");
guardar.addEventListener('click', ()=>{
    descargarBase();
    alert("FUN CA")
    
})

const izquierda = document.createElement("DIV");
    const derecha = document.createElement("DIV");
    izquierda.classList.add("izquierda");
    derecha.classList.add("derecha");


const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septimbre", "Octubre", "Noviembre", "Diciembre"];

const d = new Date();
let month = months[d.getMonth()];
let mes = d.getMonth();
let salidaMes;

//SALIDA DE MES HE
mesH3.innerHTML = month;

const cantidadDias = (mes) => {
    let año = d.getFullYear();

        let a= new Date(año, mes, 0).getDate();
        let number = a/2;
        salidaMes = parseInt(number);
    return salidaMes;
}

console.log(cantidadDias(mes));
    //let año = d.getFullYear();


    
    //return new Date(año, mes, 0).getDate();

//cantidadDias();
//console.log(cantidadDias(1, 2022));


//console.log(año);


const cuadro = document.createElement("DIV");
cuadro.classList.add("cuadro");
//crear objetos html
const farmaciaHTML = (id,nom) =>{
    
    const cuadrito = document.createElement("DIV");
    const dia = document.createElement("p");
    const fecha = document.createElement("DIV");
    const texto = document.createElement("DIV");
    const far = document.createElement("p");
    const dir = document.createElement("p");
    

    cuadrito.classList.add("cuadrito");
    dia.classList.add("par", "impar");
    fecha.classList.add("fecha");
    texto.classList.add("texto");
    far.classList.add("far");
    dir.classList.add("dir");

    fecha.textContent = id;
    far.textContent = nom.nombre;
    dir.textContent ="DIRECCION";

    fecha.appendChild(dia);
    texto.appendChild(far);
    texto.appendChild(dir);
    cuadrito.appendChild(fecha);
    cuadrito.appendChild(texto);
    

    if(id <= salidaMes){
        derecha.appendChild(cuadrito);
    }else{
        izquierda.appendChild(cuadrito);
    }
    
    cuadro.appendChild(derecha);
    cuadro.appendChild(izquierda);





    return cuadro;
    }

















