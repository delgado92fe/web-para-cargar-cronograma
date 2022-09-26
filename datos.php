<?php
include("prueba.php");

$mes = $_REQUEST['varijs'];


    if($mes == 'abril'){
        if(isset($_POST['nombre'])){
            $aaa = strval($mes);
            $nombre = $_POST['nombre'];
            $consulta = "INSERT INTO $mes(farmacias) VALUES ('$nombre')";
            $resultado = mysqli_query($conex,$consulta);
        };
    }




    switch($mes){
        case 'enero': $saleMes="enero";
        break;
        case 'abril': $saleMes="abril";
        break;
        default:
        echo "ERROR, MES NO ENCONTRADO";
    }
echo var_dump($mes);
echo "<br>";
echo "mes: $mes";
echo "<br>";
echo is_string($saleMes);



/*
if(isset($_POST['nombre'])){
    $aaa = strval($mes);
    $nombre = $_POST['nombre'];
    $consulta = "INSERT INTO $aaa(farmacias) VALUES ('$nombre')";
    $resultado = mysqli_query($conex,$consulta);
};
*/

?>


<?php /*$dias = $_REQUEST['varijs'];

echo $dias;
$arry = array();
*/
//$contado = count($datos);
/*
$nombre=$_POST["nombre"];

    $arry = [];
    array_push($arry, $nombre);
    
    print_r($arry);
    echo "<br>";
    var_dump($arry);
    echo "<br>";
    echo $dia;

foreach ($arry as $value){
    print_r($value);
    echo "<br>";
    var_dump($value);
}

/*
la bachata manuel tursio
*/

//$contado = count($arry);

//$arry = array();
//array_push($arry, $nombre);
//echo "nombre: $nombre <br>";
//echo "cont $contado <br>"
//echo "arry: $arry[1] <br>";
//echo "array: $arry <br>";
//print_r("arry: $arry");
/*foreach($arry as $value){
    print_r($value);
    echo " $value <br>";
}*/ ?>