
let cantidad;
const drog1={nombre:"clonazepam",precio:"5000"};
const drog2={nombre:"tussi",precio:"25000"};
const drog3={nombre:"porro",precio:"8000"};
const drog4={nombre:"rolitas",precio:"10000"};
const drog5={nombre:"keta",precio:"20000"};

function preciototal(cant,precios){
    let precio=cant*precios;
    alert("el total a pagar es=" + precio + "\n gracias por su compra." )
}  

alert("hola bienvenido a la farmacia");
let check=prompt("Eres policia?")
if(check=="si" || check=="SI" ){
    alert("Que tenga un buen dia oficial, aqui no esta sucediendo nada ilegal")
}
else if(check=="no" || check=="NO"){
alert("bienvenido a tu dealer de cofiaza, que te tienta hoy?")
let droga=prompt("las drogas con las que contamos hoy son: \n -clonazepam \n -tussi \n -porro \n -rolitas \n -keta");

switch(droga){
    case "clonazepam":
    cantidad=prompt("cuantas pastillas desea comprar?");
    preciototal(cantidad,drog1.precio);
    break;
    case "tussi":
    cantidad=prompt("cuantas gramos desea comprar?");
    preciototal(cantidad,drog2.precio); 
    break;
    case "porro":
    cantidad=prompt("cuantas gramos desea comprar?");
    preciototal(cantidad,drog3.precio);
    break;
    case "rolitas":
    cantidad=prompt("cuantas pastillas desea comprar?");
    preciototal(cantidad,drog4.precio);
    break;
    case "keta":
    cantidad=prompt("cuantas gramos desea comprar?");
    preciototal(cantidad,drog5.precio);
    break;
    default:
        alert("lo que solicita no tenemos en stock")
};

} else{
    alert("la respuesta no es correcta asi que asumo que sos policia boton, gorrudo")
}



