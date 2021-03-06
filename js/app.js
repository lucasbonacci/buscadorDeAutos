console.log(autos)

// variables
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')
const resultado = document.querySelector('#resultado')


const max = new Date().getFullYear()
const min = max - 10


// genera un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}


// eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // carga los autos a la pagina

    llenarSelectYear() // llena las opciones de años
})

// event listener para los selec de busqueda
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value

    filtrarAuto()
})

year.addEventListener('change', (e) => {
    datosBusqueda.year = e.target.value

    filtrarAuto()
})

minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value

    filtrarAuto()
})

maximo.addEventListener('input', (e) => {
    datosBusqueda.maximo = e.target.value

    filtrarAuto()
})

puertas.addEventListener('change', (e) =>{
    datosBusqueda.puertas = e.target.value

    filtrarAuto()
})

transmision.addEventListener('change', (e) =>{
    datosBusqueda.transmision = e.target.value

    filtrarAuto()
})

color.addEventListener('change', (e) =>{
    datosBusqueda.color = e.target.value

    filtrarAuto()
})


//funciones

function mostrarAutos(autos){

    limpiarHtml() // elimina el html de antes

    autos.forEach(auto =>{
        const {marca, modelo, year, precio, puertas, color, transmision} = auto
        const autoHTML = document.createElement('p')

        autoHTML.textContent = `
            ${marca} - ${year} - ${puertas} Puertas - Color: ${color} - Transmision: ${transmision}  - Precio: ${precio}
        `

        resultado.appendChild(autoHTML)
    })
}

function limpiarHtml(){
    while (resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function llenarSelectYear(){
    
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option')
        opcion.value = i
        opcion.textContent = i
        year.appendChild(opcion)
    } 
}

// funcion que filtra en base a la bsuqueda

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuerta).filter(filtrarTransmision).filter(filtrarColores)
    //console.log(resultado)
    if (resultado.length){
        mostrarAutos(resultado)
    } else {
        noHayResultados()
    }
}

function noHayResultados(){

    limpiarHtml()

    const noResultados = document.createElement('div')
    noResultados.classList.add('alerta', 'error' )
    noResultados.textContent = 'No hay resultados pa'
    resultado.appendChild(noResultados)
}


function filtrarMarca(auto){
    const {marca} = datosBusqueda
    if (marca){
        return auto.marca === marca
    } else {
        return auto
    }
}

function filtrarYear(auto){
    const {year} = datosBusqueda
    if (year){
        return auto.year == (year)
    } else{
        return auto
    }
}

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda
    if (minimo){
        return auto.precio >= minimo
    } else{ 
        return auto
    }
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda
    if (maximo){
        return auto.precio <= maximo
    } else{
        return auto
    }
}

function filtrarPuerta(auto){
    const {puertas} = datosBusqueda
    if (puertas){
        return auto.puertas == puertas
    } else{
        return auto
    }
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda
    if (transmision){
        return auto.transmision == transmision
    } else {
        return auto
    }
}

function filtrarColores(auto){
    const {color} = datosBusqueda
    if (color) {
        return auto.color == color
    } else{
        return auto
    }
}