function Mostrar()
{
	var rta=true;
	var max,min;
	var num;
	var primera=true
	
	while(rta==true)
	{
		num=prompt("num");
		if(primera==true)
		{
			max= num;
			min= num;
			primera=false;
		}
		else
		{
			if(num<min)
			{
			min=num;
			}
			if(num>max)
			{
			max=num
			}	
		}
		rta=confirm();
	}
	document.getElementById("maximo").value=max

document.getElementById("minimo").value=min
	}

	


//FIN DE LA FUNCIÓN