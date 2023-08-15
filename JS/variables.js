let carrito = [];
        let total = 0;

        function agregarAlCarrito(nombreProducto, precioProducto) {
            // Verificar si el producto ya está en el carrito
            const productoEnCarrito = carrito.find(item => item.nombre === nombreProducto);
            if (!productoEnCarrito) {
                carrito.push({ nombre: nombreProducto, precio: precioProducto });
                total += precioProducto;
                actualizarCarrito();
            }
        }

        function actualizarCarrito() {
            const carritoElemento = document.getElementById("carrito");
            const totalElemento = document.getElementById("total");
            
            carritoElemento.innerHTML = "";
            carrito.forEach(item => {
                const li = document.createElement("li");
                li.textContent = `${item.nombre} - $${item.precio}`;
                carritoElemento.appendChild(li);
            });
            
            totalElemento.textContent = total;
        }
 
