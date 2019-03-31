<?php

include('BaseDatos.php');

if(isset($_POST['id'])) {
  $id = $_POST['id'];
  $nombre = $_POST['Nombre']; 
  $descripcion = $_POST['Descripcion'];  
  $query = "UPDATE tareas SET Nombre = '$nombre', Descripcion = '$descripcion' WHERE id = '$id'";
  $result = mysqli_query($coneccion, $query);

  if (!$result) {
    die('consulta fallida.');
  }
  echo "actualziacion realizada";  

}

?>
