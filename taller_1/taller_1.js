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
    const totalDescuento = valorCompra * (25 / 100);
    alert(`el total de su compra aplicando el descuento seria: ${totalDescuento}`);
  } else {
    alert("no recibe descuento");
  }
}
function tramites() {
  const peticionDelUsuario = parseInt(prompt("solicitud tramite para tutelas:"));
  switch (peticionDelUsuario) {
    case 10:
      alert("petición en curso");
      break;
    case 15:
      alert("consultas");
      break;
    case 30:
      alert("día no correspondiente al trámite del derecho de petición");
      break
    default:
      alert("día no correspondiente al trámite del derecho de petición");
      break
  }
}
function derechoDePeticion() {
  const peticionDelUsuario = parseInt(prompt("solicitud tramite para derecho de peticion:"));
  switch (peticionDelUsuario) {
    case 1:
      alert("reconocimiento a un derecho");
      break;
    case 2:
      alert("la intervención de una entidad o funcionario");
      break;
    case 3:
      alert("la resolución de una situación jurídica");
      break;
    case 4:
      alert("la prestación de un servicio");
      break;
    case 5:
      alert("requerir información");
      break;
    case 6:
      alert("consultar, examinar y requerir copias de documento");
      break;
    case 7:
      alert("formular consultas, quejas y reclamos");
      break;
    case 8:
      alert("interponer reclamos");
      break;
    default: alert("no se puede evaluar el derecho de petición");
      break;
  }
}
function tanqueDeAgua() {
  const Cantidad = (prompt("cantidad de agua:"));
  switch (Cantidad) {
    case "1/5":
      alert("50lt");
      break;
    case "2/5":
      alert("100lt");
      break;
    case "3/5":
      alert("150lt");
      break;
    case "4/5":
      alert("200lt");
      break;
    case "5/5":
      alert("250lt");
      break;
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
  } else (salario >= 1475434)
  const valorHoraExtra = 12908 * horasExtras;
  const totalNeto = salario + valorHoraExtra;
  alert(`el valor de su hora extra seria de: ${valorHoraExtra}`);
  alert(`su salario neto seria: ${totalNeto}`);

}
function ingresoMensual() {
  const ingreso = parseInt(prompt("ingrese su sueldo:"));
  let mes = parseInt(prompt("insert el numero de mes (1 - 3):"));
  const sueldoMes1 = ingreso + (ingreso * 0.3);
  const sueldoMes2 = sueldoMes1 + (sueldoMes1 * 0.4);
  const sueldoMes3 = sueldoMes2 + (sueldoMes1 * 0.35);
  const valores = {
    1: sueldoMes1,
    2: sueldoMes2,
    3: sueldoMes3
  };
  alert(`su sueldo es: ${valores[mes]}`);
}


function calculo() {
  const libra = parseInt(prompt("ingrese cantidad de libras:"));
  const medida = (prompt("ingrese unidad de medida:"));
  switch (libra, medida) {
    case kilos = libra * 0.45:
    case "kilos":
      alert(`el total en kilos seria de: ${kilos}`);
      break;
    case arroba = libra / 25:
    case "arroba":
      alert(`el total en arrobas seria de: ${arroba}`);
      break;
    case tonelada = libra * 0.000453592:
    case "tonelada":
      alert(`el total en toneladas seria de: ${tonelada}`);
      break;
    default:
      alert(libra);
      break;
  }
}
function medidaRuedas() {
  const diametro = parseFloat(prompt("calcule diametro de una rueda:"));
  if (diametro > 1.4) {
    alert("La rueda es para un vehículo grande");
  } else if (diametro <= 1.4 && diametro > 0.8) {
    alert("La rueda es para un vehículo mediano");
  } else {
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
  const nota = parseInt(prompt("resultado notas:"));
  if (nota >= 1.0 && nota <= 2.9) {
    alert("PIERDE");
  } else if (nota >= 3.0 && nota <= 4.9) {
    alert("BUENO");
  } else if (nota == 5.0) {
    alert("EXCELENTE");
  } else {
    alert("esa nota no es valida");
  }
}