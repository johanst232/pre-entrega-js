/* import Swal from 'sweetalert2' */
/* const Swal = require('sweetalert2') */
const btnPol = document.querySelector('.botonP');
const goshop = () => {
    window.location.href="./eshop.html"
};const byeshop = () => {
    window.location.href="./despedida.html"
};
btnPol.addEventListener('click', () => {
    Swal.fire({
        title: "¿ESTAS SEGURO QUE NO ERES POLICIA?",
        text: "TE ESTAMOS OBSERVANDO!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "NO SOY POLICIA!",
        cancelButtonText: "SI SO POLICIA"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
            title: "BIENVENIDO!",
            text: "ESTIMADO CLIENTE.",
            icon: "success",
            showConfirmButton: false
        });
        setTimeout(goshop, 2000);
        }
       else if (result.isDismissed) {
            Swal.fire({
            title: "ASI TE QUERIA AGARRAR!",
            /* text: "ESTAMOS ENCONTRANDO A TU POLICIA.", */
            icon: "error",
            showConfirmButton: false
        })
        setTimeout(byeshop, 2000);

        } 
    });
});
