function mostrarRecordatorio() {
    let dia = document.getElementById("dia").value.toLowerCase().trim();
    let mensaje = "";

    // Validar que no sea un número
    if (!isNaN(dia) || dia === "") {
        mensaje = "Por favor, ingresa el nombre del dia, no un numero ni dejes vacio.";
    } else {
        switch(dia) {
            case "lunes":
                mensaje = "Hoy debes atender a un cliente especifico.";
                break;
            case "martes":
                mensaje = "Hoy visitas una agencia fuera de la ciudad.";
                break;
            case "miercoles":
                mensaje = "Hoy debes llevar a tu hija al ballet.";
                break;
            case "jueves":
                mensaje = "Hoy debes priorizar entregas de desarrollo.";
                break;
            case "viernes":
                mensaje = "Hoy debes atender problemas de manera remota.";
                break;
            case "sabado":
                mensaje = "Hoy debes hacer lo que tu esposa quiera.";
                break;
            case "domingo":
                mensaje = "No hay actividades registradas para este dia";
                break;
            default:
                mensaje = "El nombre es incorrecto. Por favor ingresa correctamemte el nombre del dia";
        }
    }

    document.getElementById("recordatorio").textContent = mensaje;
}
