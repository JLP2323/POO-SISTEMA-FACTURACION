document.addEventListener('DOMContentLoaded', function() {

    const btn_Clientes = document.getElementById("btn-Clientes");
    const showSaludo = document.getElementById("showSaludo");

    const btn_Producto = document.getElementById("btn-Producto");
    const showSaludoProducto = document.getElementById("showSaludoP");

    
     


    // funtion modular
    function show(showMassage){
        showMassage.style.display = "block"
    }

    btn_Clientes.addEventListener('click', function(event){
        event.preventDefault()
        show(showSaludo)
    });

    btn_Producto.addEventListener('click', function(event){
        event.preventDefault()
        show(showSaludoProducto)
    });

});
