<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Productos</h1>
        <div id="gallery" class="gallery">
            <!-- Aquí se mostrarán las imágenes de los productos -->
        </div>
        <div id="product-details" class="product-details">
            <!-- Aquí se mostrarán los detalles del producto -->
        </div>
    </div>

    <script>
        const products = [
            { image: '1.jpg', price: '$10', description: 'Descripción del producto 1' },
            { image: '2.jpg', price: '$15', description: 'Descripción del producto 2' },
            // Agrega más productos aquí
        ];

        const gallery = document.getElementById('gallery');
        const productDetails = document.getElementById('product-details');

        // Mostrar productos en la galería
        products.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `<img src="${product.image}" alt="Producto ${index + 1}">`;
            productDiv.addEventListener('click', () => {
                showProductDetails(product);
            });
            gallery.appendChild(productDiv);
        });

        // Mostrar detalles del producto seleccionado
        function showProductDetails(product) {
            productDetails.innerHTML = `
                <h2>Precio: ${product.price}</h2>
                <p>${product.description}</p>
            `;
        }
    </script>

   
</body>
</html>
