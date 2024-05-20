
// PERFIL DE USUARIO ------------- VALIDAR OPCIONES DE CAMBIAR CONTRASEÑA Y EDITAR PERFIL

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('changePasswordBtn').addEventListener('click', function() {
        var oldPassword = prompt("Ingrese la contraseña actual:");
        var newPassword = prompt("Ingrese la nueva contraseña:");
    
        if (oldPassword && newPassword) {
            alert('Contraseña cambiada con éxito');
        } else {
            alert('Error al cambiar la contraseña. Por favor, verifique la contraseña actual.');
        }
    });
    
    document.getElementById('editProfileBtn').addEventListener('click', function() {
        var newName = prompt("Ingrese su nuevo nombre:");
    
        if (newName) {
            alert('Perfil editado con éxito');
        } else {
            alert('Error al editar el perfil. Por favor, inténtelo de nuevo.');
        }
    });
    
    document.getElementById('logoutBtn').addEventListener('click', function() {
       window.location.href = '../CODIGOS_HTML/login.html';
    });
    
    });
    
    
    // INICIO DE SESION -- USUARIO PREDEFINIDO 
    
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
    
         // autenticación
         if (username === 'Richard Macias' && password === '1234') {
            window.location.href = 'main.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
    
    
    