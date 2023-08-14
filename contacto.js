document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const enviarBtn = document.getElementById("enviarBtn");

    enviarBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const nombre = form.nombre.value.trim();
        const correo = form.correo.value.trim();
        const telefono = form.telefono.value.trim();
        const mensaje = form.mensaje.value.trim();

        if (nombre === "" || correo === "" || telefono === "" || mensaje === "") {
            alert("Por favor, completa todos los campos.");
        } else {
            alert("Formulario enviado correctamente.");
            form.reset(); // Limpia los campos después de enviar
        }
    });
});
