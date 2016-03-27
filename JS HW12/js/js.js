var number = prompt("Введите число для возведения в степень");
var stepen1 = prompt("Введите степень в которую нужно возвести число");
var stepen = Math.round(stepen1);
var result=pow(number, stepen );
alert("возводим "+number+" в степень "+stepen+" получаем в результате "+ result);
function pow(n,s){
var r=1;
if (s == 0) {
	return r;
}   else if (s > 0) {
		for (i=0;i<s; i++){ r=n*r};
		return r;
} else{ 	
		for (i=0;i>s; i=i-1){ r=(n*r)};
		r=1/r;
		return r;
}
}

alert("Введите, пожалуйста, массив из 5-ти имен");
var arrayName= new Array();
for (i=0; i<5; i++) {
	var name=prompt("Введите имя очередного пользователя");
	arrayName[i]=name;
}
alert("Список пользователей: "+arrayName[0]+" , "+arrayName[1]+" , "+arrayName[2]+" , "+arrayName[3]+" , "+arrayName[4]);
var nameYours=prompt("Привет! Представьтесь, пожалуйста:");	
var k=-1;
for (i=0; i<5; i++) {
	if (arrayName[i]==nameYours) { 
		k=1;
		i=4;	
	}
}
if (k == 1) {
  alert( 'Добро пожаловать, Уважаемый  '+ nameYours);
} else {
  alert( 'Пока, Незнакомец' );
}