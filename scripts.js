document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada');

    // Modal de producto
    var productModal = document.getElementById('productModal');
    productModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget;
        var producto = JSON.parse(button.getAttribute('data-producto'));
        
        var modalNombre = productModal.querySelector('#modalNombre');
        var modalSku = productModal.querySelector('#modalSku');
        var modalDescripcion = productModal.querySelector('#modalDescripcion');
        var modalPrecio = productModal.querySelector('#modalPrecio');
        var modalImagen = productModal.querySelector('#modalImagen');
        
        modalNombre.textContent = producto.nombre;
        modalSku.textContent = 'SKU: ' + producto.sku;
        modalDescripcion.textContent = producto.descripcion;
        modalPrecio.textContent = producto.precio;
        modalImagen.src = producto.imagen;
        modalImagen.alt = producto.nombre;
    });
});
