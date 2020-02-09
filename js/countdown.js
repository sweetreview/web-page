//Codigo que muestra la cuenta atras hasta el final del año 2010

//La Web del Programador

//http://www.lawebdelprogramador.com

 

//variables que determinan la fecha y hora final de la cuenta atras


toYear=2021;

toMonth=12;

toDay=31;

toHour=23;

toMinute=59;

toSecond=59;

 

function countDown()

{

	new_year=0;

	new_month=0;

	new_day=0;

	new_hour=0;

	new_minute=0;

	new_second=0;

	actual_date=new Date();

 

	if(actual_date.getFullYear()>toYear)

	{

		//si ya nos hemos pasado del año, mostramos los valores a 0

		form.second.value=0;

		form.minute.value=0;

		form.hour.value=0;

		form.day.value=0;

		form.month.value=0;

		form.year.value=0;

	}else{

		new_second=new_second+toSecond-actual_date.getSeconds();

		if(new_second<0)

		{

			new_second=60+new_second;

			new_minute=-1;

		}

		form.second.value=new_second;

 

		new_minute=new_minute+toMinute-actual_date.getMinutes();

		if(new_minute<0)

		{

			new_minute=60+new_minute;

			new_hour=-1;

		}

		form.minute.value=new_minute;

 

		new_hour=new_hour+toHour-actual_date.getHours();

		if(new_hour<0)

		{

			new_hour=24+new_hour;

			new_day=-1;

		}

		form.hour.value=new_hour;

 

		new_day=new_day+toDay-actual_date.getDate();

		if(new_day<0)

		{

			x=actual_date.getMonth();

			if(x==0||x==2||x==4||x==6||x==7||x==9||x==11){new_day=31+new_day;}

			if(x==3||x==5||x==8||x==10){new_day=30+new_day;}

			if(x==1)

			{

				//comprobamos si es un año bisiesto...

				if(actual_date.getYear()/4-Math.floor(actual_date.getYear()/4)==0)

				{

					actual_date=29+actual_date;

				}else{

					actual_date=28+actual_date;

				}

			}

		}

		form.day.value=new_day;

 

		new_month=-1;

		new_month=new_month+toMonth-actual_date.getMonth();

		if(new_month<0)

		{

			new_month=11+new_month;

			new_year=-1;

		}

		form.month.value=new_month;

 

		new_year=new_year+toYear-actual_date.getFullYear();

		if(new_year<0)

		{

			form.year.value=0;

		}else{

			form.year.value=new_year;

			//vuelve a ejecutar la funcion dentro de 1000 milisegundos = 1 segundo

			setTimeout("countDown()",1000);

		}

	}

}