const numeroProcesosPrioridadContainer = document.createElement("div");
const formularioNumeroProcesosPrioridad = document.createElement("form");
const inputNumeroProcesos = document.createElement
("input");

const datosPrioridadContainer = document.createElement("div");
const formularioDatosPrioridad = document.createElement("form");

const buttonEnviar = document.createElement("button");
function crearFormularioPrioridad(){
    buttonEnviar.type="button";
    buttonEnviar.textContent="Enviar";
    buttonEnviar.addEventListener("click",()=>{
        crearFormularioDatosPrioridad();
    })
    inputNumeroProcesos.type="number";
    inputNumeroProcesos.placeholder="Digite el numero de procesos de la simulacion";
    formularioNumeroProcesosPrioridad.appendChild(inputNumeroProcesos);
    formularioNumeroProcesosPrioridad.appendChild(buttonEnviar);
    numeroProcesosPrioridadContainer.classList.add("main-form");
    numeroProcesosPrioridadContainer.appendChild(formularioNumeroProcesosPrioridad);
    
    mainContainer.appendChild(numeroProcesosPrioridadContainer);
}

function crearFormularioDatosPrioridad(){
    let numeroProcesos = parseInt(inputNumeroProcesos.value);
    const botonEnviarDatosPrioridad = document.createElement("button");
    botonEnviarDatosPrioridad.textContent="Enviar";
    botonEnviarDatosPrioridad.type="button";
    datosPrioridadContainer.classList.add("main-form");
    datosPrioridadContainer.appendChild(formularioDatosPrioridad);
    for(let i=0;i<numeroProcesos;i++){
        const subtitle = document.createElement("p");
        subtitle.classList.add("title-form");
        subtitle.textContent=`Proceso ${i+1}`;
        const inputTiempoCPU = document.createElement("input");
        const inputTiempoLlegada = document.createElement("input");
        const inputPrioridad = document.createElement("input");
        inputTiempoCPU.placeholder="Tiempo de CPU (ms)";
        inputPrioridad.placeholder="Prioridad";
        inputTiempoLlegada.placeholder="Tiempo de llegada";

        inputTiempoCPU.type="number";
        inputPrioridad.type="number";
        inputTiempoLlegada.type="number";
        inputTiempoLlegada.value=0;
        
        inputTiempoCPU.classList.add("tiempoCPU");
        inputPrioridad.classList.add("prioridad");
        inputTiempoLlegada.classList.add("tiempoLlegada");
        

        formularioDatosPrioridad.appendChild(subtitle);
        formularioDatosPrioridad.appendChild(inputTiempoCPU);
        formularioDatosPrioridad.appendChild(inputTiempoLlegada);
        formularioDatosPrioridad.appendChild(inputPrioridad);
    }
    botonEnviarDatosPrioridad.addEventListener("click",()=>{
        procesamientoDatosPrioridad();
    })
    formularioDatosPrioridad.appendChild(botonEnviarDatosPrioridad);
    mainContainer.appendChild(datosPrioridadContainer);
}

function procesamientoDatosPrioridad(){
    let procesosXD=[
        {
            "numeroProceso": 1,
            "tiempoLlegada": 0,
            "prioridad": 2,
            "tiempoCPU": 8,
            "listo":false
        },
        {
            "numeroProceso": 2,
            "tiempoLlegada": 2,
            "prioridad": 1,
            "tiempoCPU": 3,
            "listo":false
        },
        {
            "numeroProceso": 3,
            "tiempoLlegada": 6,
            "prioridad": 3,
            "tiempoCPU": 5,
            "listo":false
        },
        {
            "numeroProceso": 4,
            "tiempoLlegada": 8,
            "prioridad": 2,
            "tiempoCPU": 1,
            "listo":false
        }
    ];
    let procesosListos = false;
    let bandera=true;
    let cont = 0;
    while(procesosListos==false){
        
        while(procesosXD[cont].tiempoCPU<procesosXD[cont+1].tiempoLlegada){
            procesosXD[cont].tiempoCPU--;
        }
        if(procesosXD[cont].prioridad<procesosXD[cont+1].prioridad){
        }else{
            cont++;
        }




        for(let i=0;i<procesosXD.length;i++){
            bandera=bandera&&procesosXD[i].listo;
            procesosListos=bandera;
        }

    }
    
    

    /*const tiemposCPU = document.querySelectorAll(".tiempoCPU");
    const tiemposLlegada = document.querySelectorAll(".tiempoLlegada");
    const prioridades = document.querySelectorAll(".prioridad");


    let tiempoCPUDatos=[];
    let tiempoLlegadaDatos=[];
    let prioridadDatos=[];

    tiemposCPU.forEach(element =>{
        tiempoCPUDatos.push(parseInt(element.value));
    })
    tiemposLlegada.forEach(element =>{
        tiempoLlegadaDatos.push(parseInt(element.value));
    })
    prioridades.forEach(element =>{
        prioridadDatos.push(parseInt(element.value));
    })

    let procesosEntrantes=[];
    for(let i=0;i<tiempoCPUDatos.length;i++){
        procesosEntrantes.push({
            numeroProceso:i+1,
            tiempoLlegada:tiempoLlegadaDatos[i],
            prioridad:prioridadDatos[i],
            tiempoCPU:tiempoCPUDatos[i]
        });
    }

    procesosEntrantes.sort((a,b)=>{
       return a.tiempoLlegada-b.tiempoLlegada;
    })*/
    
}
