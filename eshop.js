const btnAumentar1 = document.querySelector('.bt1');
const btnDisminuir1 = document.querySelector('.bt2');
const resultado1 = document.querySelector('#resultado1');
const btnAumentar2 = document.querySelector('.bt3');
const btnDisminuir2 = document.querySelector('.bt4');
const resultado2 = document.querySelector('#resultado2');
const btnAumentar3 = document.querySelector('.bt5');
const btnDisminuir3 = document.querySelector('.bt6');
const resultado3 = document.querySelector('#resultado3');
const btnAumentar4 = document.querySelector('.bt7');
const btnDisminuir4 = document.querySelector('.bt8');
const resultado4 = document.querySelector('#resultado4');
const btnAumentar5 = document.querySelector('.bt9');
const btnDisminuir5 = document.querySelector('.bt10');
const resultado5 = document.querySelector('#resultado5');
const container = document.querySelector('.container');
const btnCompra = document.querySelector('.compra');
const precDol = document.querySelector('#precDol');

const gotot = () => {
    window.location.href = "./total.html"
};

fetch("https://dolarapi.com/v1/dolares/blue")
    .then(response => response.json())
    .then(data => {
        precDol.textContent = data.venta;
    });

let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;

// Boton 1
btnAumentar1.addEventListener('click', () => {
    contador1++
    actualizarContador1();
});

btnDisminuir1.addEventListener('click', () => {
    if (contador1 > 0) {
        contador1--
        actualizarContador1();
    }
});

const actualizarContador1 = () => {
    resultado1.textContent = contador1;
};

// Boton 2
btnAumentar2.addEventListener('click', () => {
    contador2++
    actualizarContador2();
});

btnDisminuir2.addEventListener('click', () => {
    if (contador2 > 0) {
        contador2--
        actualizarContador2();
    }
});

const actualizarContador2 = () => {
    resultado2.textContent = contador2;
};

// Boton 3
btnAumentar3.addEventListener('click', () => {
    contador3++
    actualizarContador3();
});

btnDisminuir3.addEventListener('click', () => {
    if (contador3 > 0) {
        contador3--
        actualizarContador3();
    }
});

const actualizarContador3 = () => {
    resultado3.textContent = contador3;
};

// Boton 4
btnAumentar4.addEventListener('click', () => {
    contador4++
    actualizarContador4();
});

btnDisminuir4.addEventListener('click', () => {
    if (contador4 > 0) {
        contador4--
        actualizarContador4();
    }
});

const actualizarContador4 = () => {
    resultado4.textContent = contador4;
};

// Boton 5
btnAumentar5.addEventListener('click', () => {
    contador5++
    actualizarContador5();
});

btnDisminuir5.addEventListener('click', () => {
    if (contador5 > 0) {
        contador5--
        actualizarContador5();
    }
});

const actualizarContador5 = () => {
    resultado5.textContent = contador5;
};

btnCompra.addEventListener('click', () => {
    if (contador1 != 0 || contador2 != 0 || contador3 != 0 || contador4 != 0 || contador5 != 0) {
        localStorage.setItem('porro', JSON.stringify(contador1));
        localStorage.setItem('keta', JSON.stringify(contador2));
        localStorage.setItem('tussi', JSON.stringify(contador3));
        localStorage.setItem('rolitas', JSON.stringify(contador4));
        localStorage.setItem('clonazepam', JSON.stringify(contador5));
        Swal.fire({
            title: "COMPRA REALIZADA CON EXITO",
            width: 600,
            padding: "3em",
            color: "#000000",
            showConfirmButton: false,
            background: "#fff url(./fotos/drugs.jpg)",
            backdrop:
                `
        rgba(0,0,123,0.4)
        url("./fotos/cat.gif")
        left top
        no-repeat
        `
        });
        setTimeout(gotot, 3000)
    } else {
        Swal.fire({
            title: "¿NO COMPRAS NADA?",
            text: "TAS RE DURO YA?",
            icon: "warning",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "SEGUIR COMPRANDO",
        })
    }
});

