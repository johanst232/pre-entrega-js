
let cant;
let comprafinalizada = "no";
const mensaje ={}
const carrito=[
    {nombre:"clonazepam",cantidad:0,precio:5000},
    {nombre:"tussi",cantidad:0,precio:25000},
    {nombre:"porro",cantidad:0,precio:8000},
    {nombre:"rolitas",cantidad:0,precio:10000},
    {nombre:"keta",cantidad:0,precio:20000},
]
const compraPrecio=[]


function carrBusc(nam, cant){

    const resultado = carrito.find((curso) => curso.nombre == nam);
    resultado.cantidad+=cant;
console.log(resultado);

const eliminarArt = (nombre) => {
    carrito.forEach((carr, index) => {
    if (carr.nombre == nombre) {
    carrito.splice(index, 1);
    }
    });
};
    eliminarArt(nam)
    carrito.push(resultado)
console.log(carrito)
}
function finalizarVenta(){
    compraPrecio.forEach((carr) =>{
    mensaje += compraPrecio.toString()
    })
}



alert("hola bienvenido a la farmacia");
let check=prompt("Eres policia?")
if(check=="si" || check=="SI" ){
    alert("Que tenga un buen dia oficial, aqui no esta sucediendo nada ilegal")
}
else if(check=="no" || check=="NO"){
    
    alert("bienvenido a tu dealer de cofiaza, que te tienta hoy?")

    while (comprafinalizada=="no"){

let droga=prompt("las drogas con las que contamos hoy son: \n -clonazepam \n -tussi \n -porro \n -rolitas \n -keta");

switch(droga){
    case "clonazepam":
    cant=prompt("cuantas pastillas desea comprar?");
        carrBusc("clonazepam",parseInt(cant))
    break;
    case "tussi":
    cantidad=prompt("cuantas gramos desea comprar?");
        carrBusc("tussi",parseInt(cant))
    break;
    case "porro":
    cantidad=prompt("cuantas gramos desea comprar?");
        carrBusc("porro",parseInt(cant))
    break;
    case "rolitas":
    cantidad=prompt("cuantas pastillas desea comprar?");
    carrBusc("rolitas",parseInt(cant))
    break;
    case "keta":
    cantidad=prompt("cuantas gramos desea comprar?");
    carrBusc("keta",parseInt(cant))
    break;
    default:
        alert("lo que solicita no tenemos en stock")
};

let seguir=prompt("desea seguir comprando \n -si \n -no")
if(seguir=="no"){
    comprafinalizada="si"
}
    }
    const compraFinal = carrito.filter((carr) => carr.cantidad != 0);
    console.log(compraFinal) 
        compraFinal.forEach((car)=>{
            car.cantidad*=car.precio
            compraPrecio.push({nombre:car.nombre,precio:car.cantidad}) 
        });
        finalizarVenta() 


} else{
    alert("la respuesta no es correcta asi que asumo que sos policia boton, gorrudo")
}



