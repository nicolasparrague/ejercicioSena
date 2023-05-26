function tutela() {
  const numero = parseInt(prompt("ingrese numero de tutela:"));
  if (numero == 86) {
    alert("Tutela artículo 86");
  }
  else if (numero == 23) {
    alert("Derecho de petición artículo 23");
  } else {
    alert("articulo no existente");
  }   
} 
function descuento() {
  const valorCompra = parseInt(prompt("valor compra:"));
  if (valorCompra > 7000) {
    const totalDescuento = valorCompra * 25 / 100;
    total = valorCompra - totalDescuento;
    alert(`el total de su compra aplicando el descuento seria: ${totaldescuento}`);
  }
  else {
    alert("no recibe descuento");
  }
} 
function tramites() {
  const peticionDelUsuario = parseInt(prompt("solicitud tramite para tutelas:"));
  if (peticionDelUsuario == 10) {
      alert("petición en curso"); 
  }
  if (peticionDelUsuario == 15) {
      alert("solicitud de copias");
  } 
  if (peticionDelUsuario == 30) {
      alert("consultas");
  } else {
      alert("día no correspondiente al trámite del derecho de petición");
  }   
}
function derechoDePeticion() {
  const peticionDelUsuario = parseInt(prompt("solicitud tramite para derecho de peticion:"));
  if (peticionDelUsuario == 1) {
      alert("reconocimiento a un derecho");
  }
  if (peticionDelUsuario == 2) {
      alert("la intervención de una entidad o funcionario");
  } 
  if (peticionDelUsuario == 3) {
      alert("la resolución de una situación jurídica");
  } 
  if (peticionDelUsuario == 4) {
      alert("la prestación de un servicio");
  }
  if (peticionDelUsuario == 5) {
      alert("requerir información");
  } 
  if (peticionDelUsuario == 6) {
      alert("consultar, examinar y requerir copias de documento");
  } 
  if (peticionDelUsuario == 7) {
      alert("formular consultas, quejas y reclamos");
  }
  if (peticionDelUsuario == 8) {
      alert("interponer reclamos");
  } else {
      alert("no se puede evaluar el derecho de petición"); 
  }    
}
function tanqueDeAgua() {
  const Cantidad = (prompt("cantidad de agua:"));
  if (Cantidad == "1/5") {
      alert("50lt");
  }
  if (Cantidad == "2/5") {
      alert("100lt");
  } 
  if (Cantidad == "3/5") {
      alert("150lt");
  }
  if (Cantidad == "4/5") {
      alert("200lt");
  } 
  if (Cantidad == "5/5") {
      alert("250lt");
  } 
}
function calculoSalario() {
  const salario = parseInt(prompt("ingrese su sueldo:"));
  const horasExtras = parseInt(prompt("ingrese la cantidad de horas extra:"));
  if (salario <= 737717) {
    const valorHoraExtra = 6453 * horasExtras;
    const totalNeto = salario + valorHoraExtra;
    alert(`el valor de su hora extra seria de: ${valorHoraExtra}`);
    alert(`su salario neto seria: ${totalNeto}`);
  }
  if (salario >= 1475434) {
    const valorHoraExtra = 12908 * horasExtras;
    const totalNeto = salario + valorHoraExtra;
    alert(`el valor de su hora extra seria de: ${valorHoraExtra}`);
    alert(`su salario neto seria: ${totalNeto}`);
  }
} 
function ingresoMensual() {
  const ingreso = parseInt(prompt("ingrese su sueldo:"));
  const mes = parseInt(prompt("ingrese mes laborado:"));
  if (mes == 1) {
     const sueldo = ingreso+(ingreso*30/100);
     alert(`su sueldo del primer mes es: ${sueldo}`);
  }
  if (mes == 2) {
      const sueldo1 = ingreso+(ingreso*30/100);
      alert(`su sueldo del primer mes es: ${sueldo1}`);
      const sueldo2 = sueldo1+(sueldo1*40/100);
      alert(`su sueldo del segundo mes es ${sueldo2}`);
   }
   if (mes == 3) {
      const sueldo1 = ingreso+(ingreso*30/100);
      alert(`su sueldo del primer mes es: ${sueldo1}`);
      const sueldo2 = sueldo1+(sueldo1*40/100);
      alert(`su sueldo del segundo mes es ${sueldo2}`);
      const sueldo3 = sueldo2+(sueldo2*35/100);
      alert(`su sueldo del segundo mes es ${sueldo3}`);
   }
}  
function calculo() {
  const libra = parseInt(prompt("ingrese cantidad de libras:"));
  const medida = (prompt("ingrese unidad de medida:"));
  if (medida == "kilo") {
      const libras = libra*0.45;
      alert(`el total en kilos seria de: ${libras}`);
  }
  if (medida == "arroba") {
    const libras = 25/libra;
    alert(`el total en arrobas seria de: ${libras}`);
  }
  if (medida == "tonelada") {
    const libras = libra*0.000453592;
    alert(`el total en toneladas seria de: ${libras}`);
  }
  else{
    alert(libra);
  }
}
function medidaRuedas() {
  const diametro = parseInt(prompt("calcule diametro de una rueda:"));
  if (diametro > 1.4) {
    alert("La rueda es para un vehículo grande");
  }
  if (diametro <= 1.4 && diametro > 0.8) {
    alert("La rueda es para un vehículo mediano”");
  }
  else {
    alert("La rueda es para un vehículo pequeño");
  }
}
function MedidaGrosorDiametro() {
  const diametro = parseFloat(prompt("Ingrese diametro:"));
  const grosor = parseFloat(prompt("Ingrese grosor:"));
  if (diametro > 1.4 && grosor < 0.4 || diametro <= 1.4 && diametro > 0.8 && grosor < 0.25) {
    alert("el grosor para esta rueda es inferior al recomendado");
  }
}
function notas() {
  const nota = parseInt(prompt("calcule diametro de una rueda:"));
  if (nota >= 1.0 && nota <= 2.9) {
    alert("PIERDE");
  }
  if (nota >= 3.0 && nota <= 4.9) {
    alert("BUENO");
  }
  if (nota == 5.0){
    alert("EXCELENTE");
  }
  else{
    alert("esa nota no es valida");
  }
}


