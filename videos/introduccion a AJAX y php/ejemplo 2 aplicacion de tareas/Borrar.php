<?php

include('BaseDatos.php');
if(isset($_POST['id'])){
    $id = $_POST['id'];
    $query ="DELETE FROM tareas WHERE id = $id";
    $resultado = mysqli_query($coneccion, $query);

if(!$resultado){
    die('Consulta fallida');
}
echo "Eliminado";
 }
?>