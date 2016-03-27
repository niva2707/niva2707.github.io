var number = prompt("Введите число для возведения в степень");
var powNumberInput = prompt("Введите степень в которую нужно возвести число");
var powNumberRound = Math.round(powNumberInput);
var result=pow(number, powNumberRound );
alert("возводим "+number+" в степень "+powNumberRound+" получаем в результате "+ result);
function pow(num,pow){
var res=1;
if (s == 0) {
	return res;
}   else if (pow > 0) {
		for (i=0;i<pow; i++){ res=num*res};
		return res;
} else{ 	
		for (i=0;i>pow; i=i-1){ res=(num*res)};
		res=1/res;
		return res;
}
}

alert("Введите, пожалуйста, массив из 5-ти имен");
var arrNameUser= new Array();
for (i=0; i<5; i++) {
	var nameUser=prompt("Введите имя очередного пользователя");
	arrNameUser[i]=nameUser;
}
alert("Список пользователей: "+arrNameUser[0]+" , "+arrNameUser[1]+" , "+arrNameUser[2]+" , "+arrNameUser[3]+" , "+arrNameUser[4]);
var nameYours=prompt("Привет! Представьтесь, пожалуйста:");	
var flagNameYours=false;
var i=0;
do  {if (arrNameUser[i]===nameYours) { 
		flagNameYours=true;} else i++;
} while(flagNameYours=true);
if (flagNameYours == true) {
  alert( 'Добро пожаловать, Уважаемый  '+ nameYours);
} else {
  alert( 'Пока, Незнакомец' );
}