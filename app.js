
    const cookieDialog = document.getElementById("cookie-dialog");
    const acceptCookiesButton = document.getElementById("accept-cookies");

    if (!localStorage.getItem("cookiesAccepted")) {
        cookieDialog.showModal();
    }

    acceptCookiesButton.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        cookieDialog.close();
    });


    const cart = [];
    const favorites = [];

    const productos = [
        { id: 1, imagen: "../images/camiseta.jpg", titulo: "Camiseta", descripcion: "Camiseta de algodón 100%.", precio: "10.00€" },
        { id: 2, imagen: "../images/pantalon.jpg", titulo: "Pantalón", descripcion: "Perfecto para cualquier ocasión.", precio: "20.00€" },
        { id: 3, imagen: "../images/zapatillas.jpg", titulo: "Zapatillas", descripcion: "Deportivas y cómodas.", precio: "30.00€" }
    ];


    const productTemplate = document.getElementById("product-template");
    const container = document.querySelector(".container");

    productos.forEach(producto => {
        const productCard = productTemplate.content.cloneNode(true);

        productCard.querySelector(".product-image").src = producto.imagen;
        productCard.querySelector(".product-image").alt = producto.titulo;
        productCard.querySelector(".product-title").textContent = producto.titulo;
        productCard.querySelector(".product-description").textContent = producto.descripcion;
        productCard.querySelector(".product-price").textContent = producto.precio;

        const likeButton = productCard.querySelector(".like-button");
        const cartButton = productCard.querySelector(".cart-button");


        likeButton.addEventListener("click", () => {
            if (!favorites.includes(producto.id)) {
                favorites.push(producto.id);
                alert(`${producto.titulo} añadido a favoritos.`);
            } else {
                alert(`${producto.titulo} ya está en favoritos.`);
            }
            console.log("Favoritos:", favorites);
        });


        cartButton.addEventListener("click", () => {
            if (!cart.find(item => item.id === producto.id)) {
                cart.push({ ...producto, cantidad: 1 });
                alert(`${producto.titulo} añadido al carrito.`);
            } else {
                alert(`${producto.titulo} ya está en el carrito.`);
            }
            console.log("Carrito:", cart);
        });

        container.appendChild(productCard);
    });


    const checkoutButton = document.getElementById("checkout-button");
    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("El carrito está vacío. Añade productos para continuar.");
            return;
        }


        const resumen = cart.map(item => {
            return `- ${item.titulo} x${item.cantidad} - ${item.precio}`;
        }).join("\n");

        const total = cart.reduce((acc, item) => {
            const price = parseFloat(item.precio.replace("€", ""));
            return acc + price * item.cantidad;
        }, 0);


        const confirmacion = confirm(
            `Resumen de tu compra:\n\n${resumen}\n\nTotal: $${total.toFixed(2)}\n\n¿Deseas confirmar tu compra?`
        );

        if (confirmacion) {
            alert("¡Gracias por tu compra! Tu pedido ha sido procesado.");
            cart.length = 0; 
            console.log("Carrito vacío:", cart);
        }
    });


    const viewCartButton = document.getElementById("view-cart-button");
    const cartContainer = document.getElementById("cart-container");
    const closeCartButton = document.getElementById("close-cart");

    viewCartButton.addEventListener("click", () => {
        displayCart();
    });

    closeCartButton.addEventListener("click", () => {
        cartContainer.style.display = "none";
    });


    function displayCart() {
        cartContainer.style.display = "block";
        const cartList = cartContainer.querySelector(".cart-list");
        cartList.innerHTML = "";
        
        if (cart.length === 0) {
            cartList.innerHTML = "<p>No hay productos en el carrito.</p>";
        } else {
            cart.forEach(item => {
                const productElement = document.createElement("div");
                productElement.innerHTML = `<p>${item.titulo} - ${item.precio} x${item.cantidad}</p>`;
                cartList.appendChild(productElement);
            });
        }
    }


const proceedCheckoutButton = document.getElementById("proceed-checkout");
proceedCheckoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("El carrito está vacío. Añade productos para continuar.");
        return;
    }


    const resumen = cart.map(item => {
        return `- ${item.titulo} x${item.cantidad} - ${item.precio}`;
    }).join("\n");

    const total = cart.reduce((acc, item) => {
        const price = parseFloat(item.precio.replace("€", ""));
        return acc + price * item.cantidad;
    }, 0);


    const confirmacion = confirm(
        `Resumen de tu compra:\n\n${resumen}\n\nTotal: $${total.toFixed(2)}\n\n¿Deseas confirmar tu compra?`
    );

    if (confirmacion) {
        alert("¡Gracias por tu compra! Tu pedido ha sido procesado.");
        cart.length = 0; 
        console.log("Carrito vacío:", cart);
        cartContainer.style.display = "none"; 
    }
});


    const viewFavoritesButton = document.getElementById("view-favorites-button");
    const favoritesContainer = document.getElementById("favorites-container");
    const closeFavoritesButton = document.getElementById("close-favorites");

    viewFavoritesButton.addEventListener("click", () => {
        displayFavorites();
    });

    closeFavoritesButton.addEventListener("click", () => {
        favoritesContainer.style.display = "none";
    });

   
    function displayFavorites() {
        favoritesContainer.style.display = "block";
        const favoritesList = favoritesContainer.querySelector(".favorites-list");
        favoritesList.innerHTML = "";

        if (favorites.length === 0) {
            favoritesList.innerHTML = "<p>No hay productos en favoritos.</p>";
        } else {
            productos.filter(producto => favorites.includes(producto.id)).forEach(item => {
                const productElement = document.createElement("div");
                productElement.innerHTML = `<p>${item.titulo} - ${item.precio}</p>`;
                favoritesList.appendChild(productElement);
            });
        }
    }
