// Mostrar/Ocultar contraseñas
const togglePasswordButtons = document.querySelectorAll(".toggle-password");

togglePasswordButtons.forEach(button => {
    button.addEventListener("click", function() {
        const ingresarPass = this.previousElementSibling;
        if (ingresarPass.type === "password") {
            ingresarPass.type = "text";
            this.textContent = "Ocultar";
        } else {
            ingresarPass.type = "password";
            this.textContent = "Mostrar";
        }
    });
});

// Registrar nuevo usuario
document.getElementById("registerForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    // Validación de contraseñas
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Guardar datos de usuario en el almacenamiento simple
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    window.location.href = "../index.html"; // Redirige a la página de inicio de sesión
});

// Validar y Loguear al usuario
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const almacenarCorreo = localStorage.getItem("userEmail");
    const Password = localStorage.getItem("userPassword");

    // Verifica que los datos coincidan con los almacenados
    if (almacenarCorreo === email && Password === password) {
        alert("Inicio de sesión exitoso.");
        window.location.href = "./html/home.html"; // Redirige a la página principal
    } else {
        alert("Correo o contraseña incorrectos.");
    }
});
