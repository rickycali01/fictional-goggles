// MANTENIMIENTO , VALIDAR DATOS INGRESADOS EN MANTENIMIENTO Y AGREGARLOS A UNA TABLA 


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault();

        var facultad = document.getElementById('facultad').value;
        var tipoActivo = document.getElementById('tipoActivo').value;
        var activo = document.getElementById('activo').value;
        var tipo = document.getElementById('tipo').value;
        var fecha = document.getElementById('fecha').value;
        var descripcion = document.getElementById('descripcion').value;
        var responsable = document.getElementById('responsable').value;

        var tabla = document.getElementById('tablaMantenimientos');
        var tbody = tabla.querySelector('tbody');

        var nuevaFila = document.createElement('tr');

        // Crear el resto de las celdas
        var celdaFacultad = document.createElement('td');
        var celdaTipoActivo = document.createElement('td');
        var celdaActivo = document.createElement('td');
        var celdaTipo = document.createElement('td');
        var celdaFecha = document.createElement('td');
        var celdaDescripcion = document.createElement('td');
        var celdaResponsable = document.createElement('td');

        celdaFacultad.textContent = facultad;
        celdaTipoActivo.textContent = tipoActivo;
        celdaActivo.textContent = activo;
        celdaTipo.textContent = tipo;
        celdaFecha.textContent = fecha;
        celdaDescripcion.textContent = descripcion;
        celdaResponsable.textContent = responsable;

        nuevaFila.appendChild(celdaFacultad);
        nuevaFila.appendChild(celdaTipoActivo);
        nuevaFila.appendChild(celdaActivo);
        nuevaFila.appendChild(celdaTipo);
        nuevaFila.appendChild(celdaFecha);
        nuevaFila.appendChild(celdaDescripcion);
        nuevaFila.appendChild(celdaResponsable);

        // Crear celda para el botón "Realizado"
        var celdaRealizado = document.createElement('td');
        var botonRealizado = document.createElement('button');
        botonRealizado.textContent = 'Realizado';
        botonRealizado.classList.add('marcar-realizado'); // Agrega una clase al botón
        celdaRealizado.appendChild(botonRealizado);
        nuevaFila.appendChild(celdaRealizado);

        tbody.appendChild(nuevaFila);

        document.getElementById('formulario').reset();
    });

    // Agrega un event listener para los botones de "realizado"
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('marcar-realizado')) {
            // Encuentra la fila a la que pertenece el botón
            var fila = event.target.parentElement.parentElement;

            // Elimina la fila de la tabla
            fila.remove();
        }
    });
});
