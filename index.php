<!DOCTYPE html>
<html>

<head>
	<meta name="viewport" content="width=device-width, .user-scalable=no,.initial-scale=1.0,.minimum-scale=1.0">
	<meta name="keywords" content="web desarrollo pagina sitio">
	<meta name="description" content="pagina para los turnos de las farmacias aimogasta, negocios, publicidad">
	<meta name="autor" content="Franco Delgado">
	<meta name="robots" content="index, aimogasta, farmacia, turno, rioja">
	<meta charset="utf-8">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
	<link rel="stylesheet" href="style.css">
	<link rel="icon" href="icon.jpg">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<title>CARGAR</title>
</head>
<body>

<div class="prueba"></div>

<div class="title">
	<h1>CARGAR </h1>
	<p id="pruebajsphp"></p>
</div>

<div class="gran">
	<div class="entrada">
		<p id="cons">BIENVENIDO<br>
		Ingrese el nombre de las farmacias de turno en el mes seleccionado.</p>
		<div class="cuadroEntradas">
			<div class="cuadroContadorDia">
				<p class="pDia">DIA</p>
				<p name='' id="diaContador"></p>
			</div>
			<form id="formulario" action="datos.php" class="cuadroDia" method="post">
				<input type="text" name="nombre" id="entradaFarmacia" placeholder="Nombre de la farmacia">
				<button id="enviarFarmacia" type="button">enviar</button>
			</form>
			<div class="cuadroMes">
				<select onchange="seleccionado()" id="entradaMes">
					<option value="enero">enero</option>
					<option value="febrero">febrero</option>
					<option value="marzo">marzo</option>
					<option value="abril">abril</option>
					<option value="mayo">mayo</option>
					<option value="junio">junio</option>
					<option value="julio">julio</option>
					<option value="agosto">agosto</option>
					<option value="septiembre">septiembre</option>
					<option value="octubre">octubre</option>
					<option value="noviembre">noviembre</option>
					<option value="diciembre">diciembre</option>
				</select>
				<input id="clickMes" type="submit" value="Seleccionar">
			</div>
		</div>
	</div>
</div>
	
<div class="contenConfir">
	<input id="confirmar" type="button" value="CONFIRMAR">
</div>
	
<div class="cronogramaCompleto">
	<h3 class="mesh3"></h3>
	<div class="contenedorCronograma">
		<div class="izquierdo"></div>
		<div class="derecho"></div>
	</div>
	<div class="pieDeCronograma">PIE</div>
</div>

	
<script src="codigo.js"></script>
</body>