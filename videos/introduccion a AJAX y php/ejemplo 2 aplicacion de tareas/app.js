$(function () {
    let editar = false;
    // console.log('j funciona');
    $('#resultadoTarea').hide();
    obtenerTareas();
    $('#Buscar').keyup(function () {
        if ($('#Buscar').val()) {
            let Buscar = $('#Buscar').val();
            $.ajax({
                url: "BuscarServidor.php",
                data: { Buscar },
                type: "POST",
                success: function (respuesta) {
                    let tareas = JSON.parse(respuesta);
                    let modelo = '';

                    tareas.forEach(tarea => {
                        modelo += `<li>
                 ${tarea.Nombre}
                 </l>`
                    });
                    $('#container').html(modelo);
                    $('#resultadoTarea').show();
                }
            });
        }
    });


    $('#formulariotareas').submit(function (e) {
        e.preventDefault();
        const postDatos = {
            Nombre: $('#Nombre').val(),
            Descripcion: $('#Descripcion').val(),
            id: $('#idimput').val()  };
let url = editar === false ? 'Agregar.php' : 'Actualizar.php' ;   //otra forma de validar
            console.log(url);
        $.post(url, postDatos, function (respuesta) {
            console.log(respuesta);
            obtenerTareas();                                  // invocando metodos
            $('#formulariotareas').trigger('reset');          // resetear con java script
        });

    })

    function obtenerTareas() {
        $.ajax({
            url: 'Listar.php',
            type: 'GET',
            success: function (respuesta) {
                let tareas = JSON.parse(respuesta);
                let modelo = '';
                tareas.forEach(tarea => {
                    modelo += `
           <tr idtarea="${tarea.id}">
           <td>${tarea.id}</td>
           <td>
           <a href="#" class="task-item">${tarea.Nombre}</a>
           </td>
           <td>${tarea.Descripcion}</td>
           <td>
           <button class="task-delete btn btn-danger">
           Borrar
           </button">
           </td>
            
           </tr>
           `
                });
                $('#tareas').html(modelo);
            }
        })
    }
    $(document).on('click','.task-delete', function(){
        if(confirm('¿seguro que desea eliminar?')){
            let elemento = $(this)[0].parentElement.parentElement;                         //parentElement muy util para subir niveles, de boton a tr y tr a td
            let id = $(elemento).attr('idtarea');                                          //se obtiene la propiedad
            $.post('Borrar.php', {id}, function(respuesta){
                console.log(respuesta);
               obtenerTareas()
       
            })   
        }
    })
    $(document).on('click','.task-item', function(){
        let elemento = $(this)[0].parentElement.parentElement;
        let id = $(elemento).attr('idtarea');
        $.post('Llamado.php',{id},function(respuesta) {
            const tarea= JSON.parse(respuesta);
            $('#Nombre').val(tarea.Nombre);
            $('#Descripcion').val(tarea.Descripcion);
            $('#idimput').val(tarea.id);
            editar = true;
        });
        
    });

});














