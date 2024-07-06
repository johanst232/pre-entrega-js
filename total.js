const btnVolver = document.querySelector('.volver');
const res = document.querySelector('#total');
let totalComp = 0;
let text = '';
const productos = [
    { nombre: "clonazepam", cantidad: 0, precio: 5000 },
    { nombre: "tussi", cantidad: 0, precio: 25000 },
    { nombre: "porro", cantidad: 0, precio: 8000 },
    { nombre: "rolitas", cantidad: 0, precio: 10000 },
    { nombre: "keta", cantidad: 0, precio: 20000 },
]
const carrito = [];
function facturacion (){
    for (var i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre != "total"){
            text += '<li class="list-group-item">'+carrito[i].nombre + " = " +carrito[i].precio+'</li>';
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
            carrito.push({nombre: data, precio:cant * resultado.precio})
        }

        res.textContent = "Total a pagar = " + totalComp
    }
    console.log(carrito);

}
impresion();
facturacion();

btnVolver.addEventListener('click', () => {
localStorage.clear();
});