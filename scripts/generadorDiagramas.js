
function crearDiagramaGranntFCFS_SJF(procesos,intervalos,tiempos){
    let container = document.createElement("div");
    container.classList.add("main-container")
    const diagramaContainer = document.createElement("div");
    diagramaContainer.classList.add("diagrama-container")
    diagramaContainer.style.display="grid";
    diagramaContainer.style.gridTemplateColumns= `repeat(${procesos}, minmax(100px,auto))`;
    diagramaContainer.style.gridTemplateRows=`repeat(${procesos+1}, auto)`;
    
    /*CREACION DEL CONTENEDOR Y ETIQUETAS DEL DIAGRAMA*/
    for(let i=0;i<procesos;i++){
        const labelContainer = document.createElement("div");
        const labelTitle = document.createElement("h1");
        labelTitle.classList.add("label-title");
        labelTitle.textContent=intervalos[i] + " - " + intervalos[i+1];
        labelContainer.appendChild(labelTitle);
        labelContainer.classList.add("label-container");
        diagramaContainer.appendChild(labelContainer);
    }
    let contLinea = 2;
    let cont =0;
    for(let i=1;i<procesos+1;i++){
        diagramaContainer.appendChild(crearProcesoFCFS_SJF(i,i+1,contLinea,contLinea+1,"Proceso " + i + " : "+ tiempos[cont] + "ms"));
        contLinea++;
        cont++;
    }
    const title = document.createElement("h3");
    title.textContent="Diagrama de Grannt";
    diagramaContainer.style.rowGap="10px";
    container.appendChild(title);
    container.appendChild(diagramaContainer);
    return container;
}

function crearProcesoFCFS_SJF(colInicio, colFinal, filInicio,filFinal,texto){
    const proceso = document.createElement("div");
    const labelProceso = document.createElement("p");
    labelProceso.textContent=texto;
    proceso.classList.add("proceso");
    proceso.style.gridColumn=`${colInicio}/${colFinal}`;
    proceso.style.gridRow=`${filInicio}/${filFinal}`;
    proceso.style.backgroundColor=`rgb(${generarColor()})`;
    proceso.appendChild(labelProceso);
    return proceso;
}
function generarColor(){
    let r = Math.random() * (255 - 0) + 0;
    let g = Math.random() * (255 - 0) + 0;
    let b = Math.random() * (255 - 0) + 0;
    return r + "," + g +  "," + b;
}