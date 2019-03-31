<?php

include('BaseDatos.php');

if(isset($_POST['Nombre'])) {
$Nombre = $_POST['Nombre'];
$Descripcion = $_POST['Descripcion'];
$query = "INSERT into tareas(Nombre, Descripcion) VALUES ('$Nombre','$Descripcion')";
$resutado = mysqli_query($coneccion,$query);
if(!$resutado)
{
die('No se ha insertado el dato');
}
echo'Tarea agregada';
}
?>