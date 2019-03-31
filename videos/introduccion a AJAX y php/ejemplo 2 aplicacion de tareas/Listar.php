<?php

include('BaseDatos.php');

$query ='SELECT * FROM tareas';
$resultado = mysqli_query($coneccion, $query);

if(!$resultado){
    die('Consulta fallida' . mysqli_error($coneccion));
}
$json = array();
while($fila = mysqli_fetch_array($resultado)){
        $json[]=array(
            'Nombre' => $fila['Nombre'],
            'Descripcion'   => $fila['Descripcion'],
            'id' => $fila['id'],
        );
}
$jsonstring = json_encode($json);
echo $jsonstring;
?>