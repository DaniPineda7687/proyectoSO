let inputNumeroProcesos = document.getElementById("numero-procesos");

let formularioNumProcesos = document.getElementById("formulario-num-procesos");

function solicitarInfoProcesos(){
    
    let numeroProcesos = parseInt(inputNumeroProcesos.value);

    const formularioTiempos = document.createElement("form");
    
    for(let i=0;i<numeroProcesos;i++){
        const inputTiempos = document.createElement("input");
        inputTiempos.type="number";
        inputTiempos.placeholder="Tiempo proceso " + (i+1);
        inputTiempos.setAttribute("id","tiempo-proceso" + (i+1));
        inputTiempos.setAttribute("class","input-js-tiempos");
        formularioTiempos.appendChild(inputTiempos);
    }
    const botonEnviarTiempos = document.createElement("button");
    botonEnviarTiempos.type="button";
    botonEnviarTiempos.textContent="Enviar";
    formularioTiempos.appendChild(botonEnviarTiempos);
    botonEnviarTiempos.addEventListener("click", ()=>{
        let tiemposProcesosCompleto=[];
        let inputsTiempos = document.getElementsByClassName("input-js-tiempos");
        for(let i=0;i<inputsTiempos.length;i++){
            tiemposProcesosCompleto.push(parseInt(inputsTiempos[i].value));
        }
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
        
        let promedioTiemposEspera = sumaParcial/numeroProcesos;
        etiquetasGrafica.unshift(0);
        const resultadoPromTiempoEspera = document.createElement("h1");
        resultadoPromTiempoEspera.textContent="El promedio de tiempo de espera es " + promedioTiemposEspera;
        document.body.insertAdjacentElement("afterend", resultadoPromTiempoEspera);
        crearDiagramaGrannt(etiquetasGrafica);
        console.log(tiemposProcesosCompleto);
        console.log(etiquetasGrafica);
    })

    formularioNumProcesos.insertAdjacentElement("afterend", formularioTiempos);
}

function crearDiagramaGrannt(etiquetas){
    const canvasDiagrama = document.createElement("canvas");
    canvasDiagrama.setAttribute("id","grafica");
    document.body.insertAdjacentElement("afterend",canvasDiagrama);
    const grafica = document.getElementById("grafica");

    const duracionProcesos = {
    label: "Diagrama de Grannt",
    data: [1, 1,1], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
    
};
    
new Chart(grafica, {
    type: 'line',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            duracionProcesos,
            // Aquí más datos...
        ]
    },options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});
}