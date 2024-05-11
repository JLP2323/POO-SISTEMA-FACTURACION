import { MethodsModular } from "src/classes/classModularMethods.js";

// Crear una instancia de MethodsModular
const methodsModularInstance = new MethodsModular();

document.addEventListener('DOMContentLoaded', function () {
    const formClient = document.getElementById("formClient");

    formClient.addEventListener('submit', function (event) {
        event.preventDefault();
        methodsModularInstance.resetForm(formClient);
        // formClient.submit();
    });

    const formProduct = document.getElementById("formProduct");

    formProduct.addEventListener('submit', function (event) {
        event.preventDefault();
        methodsModularInstance.resetForm(formProduct);
        // formClient.submit();
    });

    const formInvoice = document.getElementById("formInvoice");

    formInvoice.addEventListener('submit', function (event) {
        event.preventDefault();
        methodsModularInstance.resetForm(formInvoice);
        // formClient.submit();
    });
});