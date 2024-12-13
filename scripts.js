document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada');

    // Inicializa EmailJS con tu Public Key
    emailjs.init('VQmtjXJMWEnmjX9R3');

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

    // Manejo del formulario de contacto
    var contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_yaau5na', 'template_7d6a1q2', this)
            .then(function() {
                alert('Mensaje enviado correctamente!');
                contactForm.reset(); // Opcional: Limpiar el formulario después de enviar
            }, function(error) {
                alert('Error al enviar el mensaje: ' + JSON.stringify(error));
            });
    });
});
