function ingresoMensual() {
    // const ingreso = parseInt(prompt("ingrese su sueldo:"));
    // let mes = parseInt(prompt("ingrese mes laborado:"));
    const mes = prompt('insert el numero de mes (1 - 3)');

    const sueldoMes1 = ingreso + (ingreso * 0.3);
    const sueldoMes2 = sueldoMes1 + (sueldo1 * 0.4);
    const sueldoMes3 = sueldoMes2 + (sueldo1 * 0.35);

    const valores = {
        '1' : sueldoMes1,
        '2' : sueldoMes2,
        '3' : sueldoMes3
    };
alert(`su sueldo es: ${valores[mes]}`);
}