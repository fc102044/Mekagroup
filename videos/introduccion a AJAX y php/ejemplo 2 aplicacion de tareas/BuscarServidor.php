<?php

include('BaseDatos.php');
$buscar = $_POST['Buscar'];

if(!empty($buscar)){
    $query = "SELECT * FROM tareas WHERE Nombre LIKE '$buscar%' ";
    $resultado = mysqli_query($coneccion, $query);
    if(!$resultado)
    {
        die('Error en Query'.mysqli_error($coneccion));

    }

    $json = array();
    while($fila = mysqli_fetch_array($resultado))
    {
        $json[]=array(
            'Nombre' => $fila['Nombre'],
            'Descripcion'   => $fila['Descripcion'],
            'id' => $fila['id'],
        );

    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
}

?>