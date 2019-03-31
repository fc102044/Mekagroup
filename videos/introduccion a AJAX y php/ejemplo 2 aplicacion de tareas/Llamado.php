<?php

include('BaseDatos.php');
if(isset($_POST['id'])){
    $id = $_POST['id'];
    $query ="SELECT * FROM tareas WHERE id = $id";
    $resultado = mysqli_query($coneccion, $query);

if(!$resultado){
    die('Consulta fallida');
}
$json = array();
while($fila = mysqli_fetch_array($resultado)){
        $json[]=array(
            'Nombre' => $fila['Nombre'],
            'Descripcion'   => $fila['Descripcion'],
            'id' => $fila['id'],
        );
}
 };
 $jsonstring = json_encode($json[0] );
echo $jsonstring;
?>