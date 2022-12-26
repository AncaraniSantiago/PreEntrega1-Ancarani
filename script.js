alert("Bienvenido a su calculadora personalizada")
gan1=0
optiOn()
while(option!="EXIT"){
    if (option==1) {
        preProv()
        optiOn()
    }
    else if(option==2){
        calcGan()
        optiOn()
    }
    else if(option==3){
        calcDtos()
        optiOn()
    }
    else{
        alert("La opción ingresada no es correcta")
        optiOn()
    }
}
function optiOn(){
    option=prompt("Configure su calculadora primero ingresando las opciones en número\n\nIngrese 1 - Configurar precio de Proveedor\nIngrese 2 - Configurar Ganancia\nIngrese 3 - Ver precio de venta con sus descuentos\n\nPuls ESC o escriba EXIT para salir").toUpperCase()
}
function calcGan() {
gan1=Number(prompt("Ingrese el porcentaje de ganancia a percibir"))
    while(gan1<0||isNaN(gan1)){
        gan1=Number(prompt("Ingrese la ganancia nuevamente, no puede ser menor a 0 ni letras"))
    }
        alert("La ganancia configurada es de "+gan1+"%")
}
function preProv() {
    precList=Number(prompt("Ingrese el precio de lista del proveedor"))
    while(precList<0||isNaN(precList)){
        precList=Number(prompt("Ingrese el precio nuevamente, no puede ser menor a 0 ni letras"))
    }
}
function calcDtos() {
    preGan=Number((gan1/100)*precList+precList)
    dto1=preGan*0.9
    dto2=preGan*0.8
    dto3=preGan*0.7
    alert("El precio de lista es: "+preGan+"\n -10% = "+dto1+"\n -20% = "+ dto2+ "\n -30% = "+dto3)
}
