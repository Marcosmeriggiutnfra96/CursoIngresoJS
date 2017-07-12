function Mostrar()
{
	var rta=true
	var num
	var acumupost=0
	var acumuneg=0
	var contpos=0
	var contneg=0
	var contceros=0
	var contpares=0
    var mostrar
	var resneg
while(rta==true)
{

num=prompt()
num = parseInt(num);
//validar

if(num<0)
{
acumuneg+=num;
contneg++
}
else if(num>0){

acumupost+=num
contpos++
}
else
{
contceros++;

}

if(num%2==0)
{
	contpares++
}



rta=confirm("desea continuar")

}

promp=acumupost/contpos;
prompn=acumuneg/contneg;
 dif=contneg/contpos;
 if(dif<0)
{
	dif=dif*-1
}
if(acumuneg>0)
{
acumuneg= acumuneg/contneg

}
else
{
 acumuneg= "no hay ningun Nº ingresado";
}
if(acumupost>0)
{
	acumupos=acumupost/contpos
}
else
{
	acumupost= "no hay ningun Nº ingresado";
}


mostrar=document.write("la suma de los numeros negativos es " + acumuneg + " y la cantidad de numeros negativos sumados fueron "+contneg+
	 " la suma de los numeros positivos sumados es "+ acumupost + " y la cantidad de numeros positivos sumados fueron " +contpos + " la cantida de numeros pares es  " +contpares
	+ " la cantidad de ceros fueron "+ contceros+ " el promedio de los postivo y negativos es "  + dif);





}//FIN DE LA FUNCIÓN