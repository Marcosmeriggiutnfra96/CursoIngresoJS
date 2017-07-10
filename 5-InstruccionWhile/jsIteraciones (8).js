function Mostrar()
{

	
	var num=0;
	var acusuma=0;
	var acumul=1;
	var respuesta=true;
while(respuesta==true)
{
num=prompt("ingrese num")
num=parseInt(num)
//vali
if(num>=0)
{
acusuma+=num;

}
else
{


acumul*=num


}

respuesta=confirm()

}


document.getElementById('suma').value=acusuma;
document.getElementById('producto').value=acumul;

}//FIN DE LA FUNCIÓN