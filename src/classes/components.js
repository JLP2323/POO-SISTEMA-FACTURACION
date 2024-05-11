class Valida {
    solo_numeros(mensajeError, col, fil) {
        while (true) {
            // Implementación de gotoxy(col, fil) en JavaScript (asumiendo que ya está definida)
            // En JavaScript no hay una función gotoxy estándar como en Python, depende del entorno donde estés ejecutando tu código
            // Por ejemplo, en un navegador web, podrías usar algo como document.getElementById('elemento').focus() para mover el cursor a un campo de entrada específico
            // y luego obtener el valor del campo de entrada.

            // Simplemente, aquí asumimos que ya está implementada la funcionalidad para obtener un valor del usuario
            // y el valor ingresado se guarda en la variable 'valor'

            // Suponiendo que 'valor' es obtenido de alguna manera:
            if (parseInt(valor) > 0) {
                break;
            }
            else {
                // Implementación de gotoxy(col, fil) en JavaScript para mostrar el mensaje de error en una posición específica
                // Similar a la explicación anterior, esto dependerá del entorno en el que estés ejecutando tu código JavaScript
                // Aquí solo simulo que se imprime el mensaje de error en la consola.
                console.log(mensajeError);
                // Aquí podrías implementar un temporizador para limpiar el mensaje de error después de un tiempo determinado.
                // Por ejemplo:
                // setTimeout(() => { console.clear(); }, 1000);
            }
        }
        return valor;
    }

    solo_letras(mensaje, mensajeError) {
        while (true) {
            let valor = prompt(`------>   | ${mensaje}`);
            if (/^[a-zA-Z]+$/.test(valor)) {
                break;
            }
            else {
                alert(`------><  | ${mensajeError}`);
            }
        }
        return valor;
    }

    solo_decimales(mensaje, mensajeError) {
        while (true) {
            let valor = prompt(`------>   | ${mensaje}`);
            valor = parseFloat(valor);
            if (!isNaN(valor) && valor > 0) {
                break;
            }
            else {
                alert(`------><  | ${mensajeError}`);
            }
        }
        return valor;
    }

    cedula() {
        // Aquí puedes implementar la lógica para validar una cédula
        // Por ejemplo, podrías solicitar al usuario que ingrese su cédula y luego validarla según las reglas de tu país
        // Devuelve true si la cédula es válida, de lo contrario, devuelve false.
    }
}

