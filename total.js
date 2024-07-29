const btnVolver = document.querySelector('.volver');
const res = document.querySelector('#totalArs');
const resDol = document.querySelector('#totalDol');

let totalComp = 0;
let totalCompDol = 0;
let text = '';
let numConPtos = 0;
const noTruncarDecimales = {maximumFractionDigits: 20};


const prod2 = [];
const productos = [
    { nombre: "clonazepam", cantidad: 0, precio: 3.50 },
    { nombre: "tussi", cantidad: 0, precio: 17.50 },
    { nombre: "porro", cantidad: 0, precio: 5.60 },
    { nombre: "rolitas", cantidad: 0, precio: 7.00 },
    { nombre: "keta", cantidad: 0, precio: 14.00 },
]
const carrito = [];
function facturacion() {
    for (var i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre != "total") {
            text += '<li class="list-group-item">' + carrito[i].nombre + " = " + carrito[i].precio +" USD"+'</li>';
        }

    }
    document.getElementById("ulListado").innerHTML = text;
}
const impresion = () => {
    for (let i = 0; i < productos.length; i++) {
        const data = localStorage.key(i)
        const cant = parseInt(localStorage.getItem(data))
        const resultado = productos.find((art) => art.nombre == data);

        if (cant > 0) {
            totalComp += cant * resultado.precio;
            carrito.push({ nombre: data, precio: cant * resultado.precio })
        }

        fetch("https://dolarapi.com/v1/dolares/blue")
            .then(response => response.json())
            .then(data => {
                totalCompDol = Math.round(data.venta * totalComp) 
                numConPtos  = totalCompDol.toLocaleString('es', noTruncarDecimales);
                resDol.textContent = "Total a pagar en pesos = " + numConPtos + " ARS";
            });
        res.textContent = "Total a pagar en dolares = " + totalComp + " USD";
    }   
    console.log(carrito);

}
impresion();
facturacion();

btnVolver.addEventListener('click', () => {
    localStorage.clear();
});

