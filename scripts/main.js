const inputAlgoritmoSelect = document.getElementById("algoritmos");
const botonTipoAlgoritmo = document.getElementById("botonTipoAlgoritmo");
const mainContainer = document.getElementById("main-container")

function crearFormularioFCFS(){
    const formContainer = document.createElement("div");
    const form = document.createElement("form");
    const inputNumeroProcesos = document.createElement("input");
    const botonEnviarNumeroProcesos = document.createElement("button");
    formContainer.classList.add("main-form");
    inputNumeroProcesos.placeholder="Digite el numero de procesos de la simulacion";
    inputNumeroProcesos.setAttribute("id","numero-procesos");
    inputNumeroProcesos.type="number";
    botonEnviarNumeroProcesos.setAttribute("type","button");
    inputNumeroProcesos.required=true;
    botonEnviarNumeroProcesos.textContent="Enviar";
    botonEnviarNumeroProcesos.addEventListener("click",()=>{
        mainContainer.appendChild(formularioTiemposProcesosFCFS(parseInt(inputNumeroProcesos.value)));
        botonEnviarNumeroProcesos.disabled=true;
    })
    form.appendChild(inputNumeroProcesos);
    form.appendChild(botonEnviarNumeroProcesos);
    formContainer.appendChild(form);
    mainContainer.appendChild(formContainer);   
}
function formularioTiemposProcesosFCFS(numeroProcesos){
    const formNumeroTiemposContainer = document.createElement("div");
    const titleFormularioTiemposProcesos = document.createElement("p");
    titleFormularioTiemposProcesos.classList.add("title-form");
    titleFormularioTiemposProcesos.textContent="Digite los tiempos que requieren sus procesos";
    formNumeroTiemposContainer.setAttribute("class","main-form");
    formNumeroTiemposContainer.appendChild(titleFormularioTiemposProcesos);
    formNumeroTiemposContainer.appendChild(crearCantidadTiempos(numeroProcesos));
    return formNumeroTiemposContainer;
}

function ejecutarAlgoritmos(){
    const algoritmoSelect = inputAlgoritmoSelect.value;
    if(algoritmoSelect=="FCFS"){
        crearFormularioFCFS();
        botonTipoAlgoritmo.disabled = true;
    }
}