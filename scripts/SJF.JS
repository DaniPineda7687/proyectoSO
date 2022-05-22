const botonEnviarTiemposSJF = document.createElement("button");
function crearCantidadTiemposSJF(numeroProcesos){
    const formularioTiempos = document.createElement("form");
    for(let i=0;i<numeroProcesos;i++){
        const inputTiempos = document.createElement("input");
        inputTiempos.type="number";
        inputTiempos.placeholder="Tiempo proceso " + (i+1);
        inputTiempos.setAttribute("id","tiempo-proceso" + (i+1));
        inputTiempos.setAttribute("class","input-js-tiempos");
        formularioTiempos.appendChild(inputTiempos);
    }
    botonEnviarTiemposSJF.type="button";
    botonEnviarTiemposSJF.textContent="Enviar";
    formularioTiempos.appendChild(botonEnviarTiemposSJF);
    botonEnviarTiemposSJF.setAttribute("onclick","startAlgoritmoSJF()");
    return formularioTiempos;
}

function startAlgoritmoSJF(){
    const resultsContainer = document.createElement("div");
    resultsContainer.classList.add("results-container")
    botonEnviarTiemposSJF.disabled=true;
    let tiemposProcesosCompleto=[];
    let inputsTiempos = document.getElementsByClassName("input-js-tiempos");
    let numeroProcesos = parseInt(document.getElementById("numero-procesos").value);
    
    for(let i=0;i<inputsTiempos.length;i++){
        tiemposProcesosCompleto.push(parseFloat(inputsTiempos[i].value));
    }
    tiemposProcesosCompleto.sort(function(a,b){
        return a-b;
    });
    let tiempoProcesosProm = Object.values(tiemposProcesosCompleto);
    let sumaParcial = 0;
    let etiquetasGrafica = [];
    tiempoProcesosProm.reduce((acc,el)=>{
        etiquetasGrafica.push(acc+el);
        return acc+el;
    },0);
    tiempoProcesosProm.pop();
    tiempoProcesosProm.reduce((acc,el)=>{
        sumaParcial+=acc+el;
        return acc+el;
    },sumaParcial);  
    let promedioTiemposEspera = (sumaParcial/numeroProcesos).toFixed(2);
    
    etiquetasGrafica.unshift(0);
    const titleResultados = document.createElement("h2");
    const resultadoPromTiempoEspera = document.createElement("h3");
    titleResultados.textContent="Resultados: ";
    resultadoPromTiempoEspera.textContent="El promedio de tiempo de espera es " + promedioTiemposEspera + "ms";
    resultsContainer.appendChild(titleResultados);
    resultsContainer.appendChild(resultadoPromTiempoEspera);
    resultsContainer.appendChild(crearDiagramaGranntFCFS_SJF(numeroProcesos,etiquetasGrafica,tiemposProcesosCompleto));
    mainContainer.appendChild(resultsContainer);
}
